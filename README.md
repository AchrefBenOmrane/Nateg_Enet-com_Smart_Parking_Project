![Covenateg](https://user-images.githubusercontent.com/54064593/80898488-9be4ce00-8cc9-11ea-84dc-a639ee10b197.png)



# Nateg_Enet-com_Smart_Parking_Project 

### PROJECT : DESIGNING AND IMPLEMENTING A PREPAID SMART RECOGNITION VEHICLES FOR AN ELECTRONIC TOLL SYSTEM using Raspberry Pi 4

### PROBLEMATIC :

Car parking is a major problem in urban areas in both developed and developing
countries. 
Following the rapid incense of car ownership many cities are suffering from
lacking of car parking areas with imbalance between parking supply and demand which
underlies a major part of other problems, such as air pollution, noise pollution, and also
waste of time and cost for citizens.
So we can assume that parking space is one of the three main elements of urban
transport, and its proper control is one of the requirements of urban traffic
management.
Solution proposed:

To address this issue we will implement a prepaid smart recognition of
vehicles for different parking systems, this system will have a huge impact
on management of urban traffic by offering different services such as
available places at any giving moment , it’s an autonomous system that will
reduce human interaction with parking systems and it will generates a
considerable time saving ..

### Description :

The procedural development of proposed system components are grouped into
five different phases, based on the function carried out by the modules of the
prototype as briefly described in this section.
Image Recognition phase.
Design mechanism to capture the number plate image.
To capture the image of the number plate and its processing to obtain the
variable characters and numbers progressive cameras are highly used type of
cameras and is totally recommended because they are able to trap the image
with the vehicle on range (focus area) for the vehicle in movement.
The detection of the number plate and process the image for Electronic Tollgate
Collection (ETC) system may be achieved in both hardware and software by the
following stapes.

1. The camera is placed short distance ahead the vehicle or truck and capture the
image of the number plate fixed on the vehicle by infrared radiations managed
by camera with its built-in software.

2. As the vehicle enters and settles in the field of the sensor (Camera). Through
the infrared sensor (built-in camera) sense a vehicle and gives a signal to the PC
through microcontroller to capture the number plate image of the vehicle and
process it.

3. The number plate is then compared to the authorized number in database to
confirm its validity and finally provides signal to microcontroller to control the
system hardware.

4. The integrated ETC system equipment with software part for the registered
vehicles to a database allow the system to perform the following task;

✓ Check if the vehicle is registered or not.
✓ Check the amount if satisfy or not.
✓ Perform online debit transactions.
✓ Notify the Driver (owner) if vehicle not registered, amount not
enough.

5. The system will perform the tasks as signal sent from or to microprocessor to
either open the tollgate or warning signal for amount top-up or unregistered
vehicle detection.

![Project _Architecture](https://user-images.githubusercontent.com/54064593/80898181-29262380-8cc6-11ea-9e86-867e81ca7b58.jpg)

### Processing and Recognition Phase:
Image acquisition is done by the USB Sensing camera which captures the image
when it is triggered. The positioning of the camera will be structured to get the
image of the number plate for the front part of the ongoing vehicle approaching
the toll station. Preprocessing; After digital image has been obtained and send to
the server system next step is to deal with preprocessing of the image. The main
purpose of the pre-processing is to increase the efficiency of character
recognition which include the set algorithms applied on the images to enhance
the quality while obtaining the correct characters required. It is an important
phase in the system.

![cd](https://user-images.githubusercontent.com/54064593/80898407-a81c5b80-8cc8-11ea-84c8-e6cc5eef6f2a.png)

![djpg](https://user-images.githubusercontent.com/54064593/80898411-b36f8700-8cc8-11ea-805e-40e0acda2fbb.png)

### WEB PLATFORM :


It will contain two interfaces one for the client and the other for the Master Web
This platform will facilitate the interaction with a client.
Throw this platform a client can:

1. Buy one of our available membership
2. Check his balance
3. Register to our system
4. Visualize his history of payment
5. Manage and setting his account
6. Read messages (Why he was unable to access to a parking)

On the other side the admin will verify and manage all registered accounts
But his main role is to approve and activate the account of a new client after
payment.
In this platform our team will use:

 -Angular 8 as a FRONT-END framwork for the front end developing
- Firebase as a BACK-END to maintain the availability and the scalability of data .


![Screenshot_2020-05-03 Messenger(3)](https://user-images.githubusercontent.com/54064593/80898316-7f479680-8cc7-11ea-9f2d-583ea2eba5b4.png)
![Screenshot_2020-05-03 Messenger(5)](https://user-images.githubusercontent.com/54064593/80898317-81115a00-8cc7-11ea-8091-5135abf55081.png)
![Screenshot_2020-05-03 Messenger(4)](https://user-images.githubusercontent.com/54064593/80898318-82db1d80-8cc7-11ea-9e82-35297fa107b0.png)

### System Functional Testing:

i. The system compares the current amount in the account and deduct the
predefined.
ii. The system displays the unregistered status for unregistered vehicles .
iii. The system allows or denies if the amount either satisfies or not.
iv. The system captures and keeps the vehicle number plate and time of passing
the lane in database.
### System Security Testing:

Typical security requirements testing based on non-functional requirements
which include specific elements like confidentiality, integrity, authentication,
availability, authorization and nonrepudiation.


