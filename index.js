import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import router from "./src/routes/index.js";

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/", router);
// app.post("/comment", (req, res) => {
//   const comment = new Comment({
//     name: req.body.name,
//     comment: req.body.comment,
//   })
//     .save()
//     .then(res.send("Send Comment Sucsess"));
// });

// app.get("/list", (req, res) => {
//   Comment.find().then((result) => {
//     res.send(result);
//   });
// });

// app.delete("/Delete/:id", (req, res) => {
//   const { id } = req.params;
//   Comment.findByIdAndDelete(id).then((data) => {
//     if (!data) {
//       res.send(`No data with Id=${id}`);
//     } else {
//       res.send("delete success");
//     }
//   });
// });
// app.patch("/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, comment } = req.body;
//   const data = {
//     name,
//     comment,
//   };
//   Comment.findByIdAndUpdate(id, data).then((data) => {
//     if (!data) {
//       res.send(`No data with Id=${id}`);
//     } else {
//       res.send("update   success");
//     }
//   });
// });

// app.get("/Get/:id", (req, res) => {
//   const { id } = req.params;
//   Comment.findById(id).then((data) => {
//     if (!data)
//       res.status(404).send({ message: "Not found Comment with id " + id });
//     else res.send(data);
//   })
// });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
  mongoose
    .connect("mongodb+srv://icad:kandouw.com36@magang.tjrshx0.mongodb.net/test")
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.log("can't connet to database");
    });
});
