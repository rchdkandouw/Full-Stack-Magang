import express from "express";
const app = express();
import mongoose, { model } from "mongoose";
import Comment from './comment.model.js';
import cors from 'cors';

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/comment',(req, res)=>{
    const comment = new Comment({
      name : req.body.name,
      comment : req.body.comment,
    }).save().then(res.send("Send Comment Sucsess"))
});

app.get("/list", (req, res) => {
    Comment.find().then(result => {
      res.send (result)
    })
});

app.post("/delet", (req, res) =>{
  Comment.remove();
  res.send({comment : true})

});

app.post("/update", (req, res) =>{
  
})



app.listen(4000, () => {
  console.log("Server is running on port 4000");
  mongoose.connect("mongodb+srv://icad:kandouw.com36@magang.tjrshx0.mongodb.net/test")
  .then(() => {
    console.log("connected to database");
  }).catch(() => {
    console.log("can't connet to database");
  });

});
