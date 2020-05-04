# libraries import
class Detection():
    def __init__(self):
        pass

    def plate_detection(self,img):
        dimention=()
        return dimention            #tuple for positioning where we'll crop the img

    def crop(self,img,dimention):
        cropped_img=''
        return cropped_img          #Crop an image with a specefic dimentions

    def Ocr(self,cropped_img):      #Image to text
        ocr_txt=""
        f=open("ocr.txt","w")
        f.write(ocr_txt)
        f.close()
        
    def main_ai(self,img):              # Containe the whole process
        dim=self.plate_detection(img)
        img_cropped=self.crop(dim)
        self.Ocr(img_cropped)
        
        


        
    
    
