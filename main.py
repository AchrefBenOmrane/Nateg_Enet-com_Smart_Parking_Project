#import library
from Ai_functionalities import Detection
from DB_Manipulation import DB
from Web_functionalies import Web_Api
from Raspberry_function import Raspberry

#initialisation
ai=Detection()
db= DB()
Web=Web_Api()
rasp=Raspberry()
        
#main        
if __name__ == "__main__":
    if (rasp.sensors_location ):  #if sensor detect the car
        img=rasp.Image_Capture()  # then the camera take image of car
        ai.main_ai(img)           # then the model of detection plate will be active and croped this img and convert img_cropped to text
        f=open('ocr.txt','r')
        plate_Num=f.read()        #save the plate_num txt in file
        f.close()
        try:
            list_info(db.get_userInfo(plate_Num))  #return the UserID and the EnterCounter of this Plate_Num
            if ((list_info)[1]<-3):  #if EnterCounter<-3
                print("u can not enter !!! Bitch ")
            else:
                rasp.Open_Toll() #if EnterCounter>-3  : open the toll
                time.sleep(150)
                db.update(list_info[0],list_info[1]-1) #update of localDatabase       #list_info[0]: UserId 
                                                                                          
                Web.update(list_info[0],list_info[1]-1) #Update of web DataBase       #list _info[1]:  EnterCounter 
                
                
                
            
        except:
            print('User Not Found')