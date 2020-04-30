


from firebase import firebase





class Web_Api():
    def __init__(self,URL):
        self.URL=URL
        # Data base initialisation parameters
        self.Tirebase=firebase.FirebaseApplication(self.URL,None)
      
        
       
        
        
        
    def read(self,UserID,Attribute_Name):
        # column_Name: name of collection 
        #  Attribute_Name: columns of DB (UserID,PlateNum,TotalAmoun,EnterCounter)
        
        result = self.Tirebase.get('/'+UserID+'/', Attribute_Name)
        print(result)
        
    def update(self, UserId,New_Entercounter):
        self.Tirebase.put('/'+UserId+'/','EnterCounter',New_Entercounter)
    

test=Web_Api('https://web-functionalies-api.firebaseio.com/')
test.read('subscriber','EnterCounter')
test.update('subscriber','123456','100')
test.read('subscriber','EnterCounter')
    
    
    
