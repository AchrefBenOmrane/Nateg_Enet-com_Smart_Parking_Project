# We need  to add a function which return a cropped image ( just the plate number)
# This script detect the shape of the plate 
# So we need to use these parameters to crop the image                  ***** already done  (integrated on this script)
# The result will be saved on ocr.txt file 			       ***** not yet
# This script should be transformed as a function : input image captured from the camera ====> output plate number saved on ocr.txt   ***** not yet 


# Import packages
import os
import cv2
import numpy as np
import sys
import time
from skimage import io
from tensorflow.lite.python.interpreter import Interpreter

# Get path to current working directory
CWD_PATH = os.getcwd()
# With testing you will know which is the best
min_conf_threshold = 0.6
images = 'Image_Test.jpeg'
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
start = time.time()
interpreter.invoke()
total_time += time.time() - start
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
        cv2.rectangle(image, (xmin, ymin), (xmax, ymax), (10, 255, 0), 2)

        croped_img = image[ymin+1:ymax+1, xmin+1:xmax+1]

      #  xmin -------------> xmax =297--------- ymin = 362 -
      #                                                    -
      #                                                    -
      #                                                    -
      #                                          ymax=387  -

    cv2.imshow('Object detector', croped_img)
    cv2.imshow('rt', image)

    # Press any key to continue to next image, or press 'q' to quit
    if cv2.waitKey(0) == ord('q'):
        break

# Clean up
cv2.destroyAllWindows()
print("Average detection time {} seconds".format(total_time/len(images)))



