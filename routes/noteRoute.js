const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
//server se sari  request yaha aa jaegi and then deal with all the request accordingly


//here we will configure the route to get or send data from database to frontend.
router.route("/create").post((req,res)=>{
   const title=req.body.title
   const content = req.body.content
   const newNote = new Note({
       title,content 
   }) 
   newNote.save();   //saved to the db
})

// this is the request to display the notes in the /notes route.
//sending from the backend and will display in frontend.
router.route("/notes").get((req,res)=>{
    Note.find().then(foundnotes=>{
        console.log(foundnotes);
        res.json(foundnotes)
    })
})




module.exports=router;