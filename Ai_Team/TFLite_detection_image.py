# This script detect the plate number 
# We devised the plate number into 2 patch right-left 
# we use tesseract as an ocr engine to detect the number in each patch 
# also to detect the number of plate as a one single block
# The outputs of this script are : full_plate,plate_num_left,plate_num_right
# From this outputs we will  predict the right plate number .....

# Import packages
import os
import cv2
import numpy as np
import sys
#from skimage import io
from tensorflow.lite.python.interpreter import Interpreter
import pytesseract
import textdistance as td
import re

# Get path to current working directory
CWD_PATH = os.getcwd()

# With testing you will know which is the best
min_conf_threshold = 0.6
images = '52.jpeg'

# path to model
PATH_TO_CKPT = os.path.join(CWD_PATH, 'model.tflite')
labels = 'labelmap.txt'

#pkg = importlib.util.find_spec('tflite_runtime')
# Have to do a weird fix for label map if using the COCO "starter model" from
# https://www.tensorflow.org/lite/models/object_detection/overview
# First label is '???', which has to be removed.

if labels[0] == '???':
    del(labels[0])

# Load the Tensorflow Lite model.
interpreter = Interpreter(model_path=PATH_TO_CKPT)
interpreter.allocate_tensors()

# Get model details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()
height = input_details[0]['shape'][1]
width = input_details[0]['shape'][2]

floating_model = (input_details[0]['dtype'] == np.float32)

input_mean = 127.5
input_std = 127.5
total_time = 0

# Load image and resize to expected shape [1xHxWx3]
# Two option to read the img
image = cv2.imread(images)
#image = io.imread(images)
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
imH, imW, _ = image.shape
image_resized = cv2.resize(image_rgb, (width, height))
input_data = np.expand_dims(image_resized, axis=0)
# Normalize pixel values if using a floating model (i.e. if model is non-quantized)
if floating_model:
    input_data = (np.float32(input_data) - input_mean) / input_std
# Perform the actual detection by running the model with the image as input
interpreter.set_tensor(input_details[0]['index'], input_data)
interpreter.invoke()

# Retrieve detection results
# Bounding box coordinates of detected objects
boxes = interpreter.get_tensor(output_details[0]['index'])[0]
classes = interpreter.get_tensor(output_details[1]['index'])[
    0]  # Class index of detected objects
scores = interpreter.get_tensor(output_details[2]['index'])[
    0]  # Confidence of detected objects
# num = interpreter.get_tensor(output_details[3]['index'])[0]  # Total number of detected objects (inaccurate and not needed)
# Loop over all detections and draw detection box if confidence is above minimum threshold
for i in range(len(scores)):
    if ((scores[i] > min_conf_threshold) and (scores[i] <= 1.0)):
        # Get bounding box coordinates and draw box
        # Interpreter can return coordinates that are outside of image dimensions, need to force them to be within image using max() and min()
        ymin = int(max(1, (boxes[i][0] * imH)))
        xmin = int(max(1, (boxes[i][1] * imW)))
        ymax = int(min(imH, (boxes[i][2] * imH)))
        xmax = int(min(imW, (boxes[i][3] * imW)))
        #cv2.rectangle(image, (xmin, ymin), (xmax, ymax), (10, 255, 0), 2)
# only the plate number will be appeared
croped_img = image[ymin:ymax, xmin:xmax]

#  xmin -------------> xmax =297--------- ymin = 362 -
#                                                    -
#                                                    -
#                                                    -
#                                          ymax=387  -

# this will return the size of the plate : ***TN****
dim_img = croped_img.shape[1]

# will crop the plate into 2 patch right and left for ocr precision purposes
left = croped_img[:, :int(dim_img/3)]
right = croped_img[:, int(dim_img/2.1):]

# To visualize the patches 
# cv2.imshow('tesd',left)
# cv2.imshow('testr',right)
# cv2.waitKey(0)

# Tesseract engine 
ocr = pytesseract.image_to_string(croped_img)
ocr_left = pytesseract.image_to_string(left)
ocr_right = pytesseract.image_to_string(right)


plate_num_right = ""
plate_num_left = ""
full_plate = ""

# Collectin only the numbers in each patch 

for i in ocr_left:
    if bool(re.match(r"[0-9]+", i)):
        plate_num_left += i


for j in ocr_right:
    if bool(re.match(r"[0-9]+", j)):
        plate_num_right += j

for k in ocr:
    if bool(re.match(r"[0-9]+", k)):
        full_plate += k

# Print results 

print(full_plate)
print(plate_num_left)
print(plate_num_right)

# for the image named 52.jpeg  (the original plate number of this car is : 153 TN 4106 )the result will be : 

#   1530254106
#   153 
#   4106

