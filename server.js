const express=require('express')
const app=express();
const cors=require('cors')
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json()); //to parse the request coming from the frontend


// connect to mongoose
mongoose.connect("mongodb+srv://akshay:Cluster0@cluster0.mgikw.mongodb.net/blogmern")

// require route
app.use("/",require("./routes/noteRoute"))


// VERY IMP -> "/" se koi bhi request aaegi server pr to is pr chali jaegi...
//the we are handling it there..... for different routes..


app.listen(3001,()=>{
    console.log("server started on port 3001")
})
//this node server should be different from the react port default 3000;

// and this will be the proxy key(3001) in the frontend
// a connection point .
// add the proxy in the package.json in the frontend as this port.