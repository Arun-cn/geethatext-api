const express = require('express');

const app = express();

// response for home route
app.get('/',(res,rep)=>{
    rep.send("welcome to our websitenodenode")
})


//listen to port 3000
app.listen(3000,()=>{
    console.log('server started in port:3000')
})