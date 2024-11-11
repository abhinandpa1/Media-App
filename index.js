 // 1 import json server 
 const jsonServer =require('json-server')

 // 2 create server application using json server
 const mediaAppserver = jsonServer.create()

 // 3 create a middleware used by json server
 const middleware =jsonServer.defaults()

 // 4 create router : set up router for db.json file
 const router =jsonServer.router('db.json')

 // 5 Apply ing middleware to server 
 mediaAppserver.use(middleware)

 // 6 Applying router to server
 mediaAppserver.use(router)

 // 7 Define port
 const PORT =3000

 // 8 Starting the server
 mediaAppserver.listen(PORT,()=>{
    console.log("Media App Server Started On PORT" +PORT);
    })