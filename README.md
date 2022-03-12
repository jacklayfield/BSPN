# BSPN
Developer Environment Notes:  <br /> 
------------------------------------------------------------------------------------- 

Run: "npm install -g nodemon" <br /> 
    installs nodemon on your machine globally <br />
    run server with "nodemon server" <br /> 

Open PowerShell as Administrator and run: "Set-ExecutionPolicy Unrestricted"  <br /> 
    allows you to execute scripts (i.e the server) <br /> 
    windows only, dunno what to do for mac/linux <br /> 

https://docs.mongodb.com/manual/administration/install-community/ <br /> 
    instructions for downloading MongoDB <br /> 
    add C:\Program Files\MongoDB\Server\5.0\bin to PATH <br /> 
    add C:\data\db directory <br />
    "mongod" to start instance <br />
    
Running Instructions:  <br /> 
------------------------------------------------------------------------------------- 

Backend: <br />
    Go to BSPN/backend directory and type "mongod" to start instance od the database <br />
    Go to BSPN/backend directory and type "nodemon server" to start the server <br />
    
Frontend: <br />
    Go to BSPN/bspn-app direcotry and type "npm start" to run front end application <br />
    
    
    

