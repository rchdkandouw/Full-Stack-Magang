import Comment from "../models/comment.model.js";
export function post(req, res) {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  })
    .save()
    .then(res.send("Send Comment Sucsess"));
}
export const list = (req, res) => {
  Comment.find().then((result) => {
    res.send(result);
  });
};
export const Delete = (req, res) => {
  const { id } = req.params;
  Comment.findByIdAndDelete(id).then((data) => {
    if (!data) {
      res.send(`No data with Id=${id}`);
    } else {
      res.send("delete success");
    }
  });
};
export const update = (req, res) => {
  const { id } = req.params;
  Comment.findByIdAndDelete(id).then((data) => {
    if (!data) {
      res.send(`No data with Id=${id}`);
    } else {
      res.send("delete success");
    }
  });
};
export const get = (req, res) => {
  const { id } = req.params;
  Comment.findById(id).then((data) => {
    if (!data)
      res.status(404).send({ message: "Not found Comment with id " + id });
    else res.send(data);
  });
};
