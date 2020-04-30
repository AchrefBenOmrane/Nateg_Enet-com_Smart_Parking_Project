from pymongo import MongoClient
from bson.json_util import dumps   ### for visualization data presented on a collection



class DB():
    def __init__(self ,adress):
        #should be written 'adress:port'
        self.client=MongoClient(adress)
        self.db=self.client.efs

    def insert(self,UserID,PlateNum,TotalAmount,EnterCounter):
        decesion_var = False
        try:

            self.db.clients.insert_one(
	         {
		        "UserID": UserID,
	            "PlateNum":PlateNum,
	    	    "TotalAmount":TotalAmount,
		        "EnterCounter":EnterCounter
	        } )
            decesion_var=True
            print ('\nInserted data successfully\n')

        except:
            print("connect your database !")
        return decesion_var    

    def update(self,UserID,EnterCounter):
        decesion_var = False  #for verifing purposes
        #update EnterCounter once the clients enter
        try:
            self.db.clients.update_one(
                
	            {"UserID": UserID},
	            {
		            "$set": {
		        
		            "EnterCounter":EnterCounter
		        }
	            })
            
            decesion_var = True
            print ("\nRecords updated successfully\n")  

        except:
            print("User not found!") 
        return decesion_var 

    def delete(self,UserID):
        #once the delete function is called , it will work (even there is no userid in db )
        self.db.clients.delete_one({"UserID":UserID})
      
    def get_userInfo(self,plate_txt):
        
        # query monog db  to find all information about client 
        try:
            result=self.db.clients.find({"PlateNum": plate_txt })
            
            
            for res in result:
                a=(res['UserID'],res['EnterCounter'])
                
               
            return a

        except:
            print("PlateNum not fount")
        
    

test=DB("localhost:27017")
test.get_userInfo()