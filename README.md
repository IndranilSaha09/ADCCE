#   Access Platform for Providers (APP)- Group 3b

<p align="center">
<strong>"Agile Development in Cloud Computing Environments"</strong>

   
   Team Members
   <br>
   Deblina Karmakar (1427965)
   <br>
   Indranil Saha (1427190)
    <br>
    Ankita Talande (1427349)
    <br>
    Nasir Ishaq (1444979)
	<br>
   Pham Tien Son (1318513)
</p>
<br/>
 
## Project overview
The project is structured around two key phases. In the initial phase, the company is dedicated to generating and publishing new master agreements. 
It is to be noted that master agreements can be published in several quantities, depending on the domain and role. 
Providers have the privilege of accessing these master agreements, enabling them to make decisions by either accepting or rejecting the offers.
Within this phase, providers can also define parameters for salary limits, and the master agreements automatically conclude after a specified time interval.
Moving into the second phase of the project, the company focuses on creating service requests for employees to be fulfilled by providers. 
Following the service evaluation, providers extend offers to employees, and a negotiation process ensues. 

*   Run the Application

1. To run the application – npm install, npm start
2. To run the application locally - http://localhost:4000/
3. To run application in cloud – host it in cloud platform and run it 


*   API Implementation 

1. API from others group
   Below are the inbound APIs from group 2b and group 4b as provided by the respective teams –

* Group 1  API - https://codexauth.onrender.com/api/register/
* Group 2b API - https://dg4gi3uw0m2xs.cloudfront.net/agreement
* Group 4b API - http://13.48.42.106:8000/request-details/

2. Group 3b API 
   Below are the outbound APIs from group 3b to the other groups of the project -  

* http://ec2-52-90-1-48.compute-1.amazonaws.com:4000/users/offers?provider=A
* http://ec2-52-90-1-48.compute-1.amazonaws.com:4000/users/offers?provider=B
* http://ec2-52-90-1-48.compute-1.amazonaws.com:4000/users/offers?provider=C
* http://ec2-52-90-1-48.compute-1.amazonaws.com:4000/users/offers?provider=D
