# BSPN
Updates:  <br /> 
------------------------------------------------------------------------------------- 
Now using cloud instance of MongoDB (on my account, working on figuring out how to share it with everyone) <br />
"backend" has been renamed to "api" <br />
node_modules deleted and gitignored for api, run npm install inside BSPN/api <br />
Install dependencies: express, mongoose, dotenv, multer, bcrypt <br />
Tutorial: https://www.youtube.com/watch?v=tlTdbc5byAs&t=0s <bt />

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

Api: <br />
    Go to BSPN/api directory and type "npm start" to start the server <br />
    
Frontend: <br />
    Go to BSPN/bspn-app direcotry and type "npm start" to run front end application <br />
    

    

