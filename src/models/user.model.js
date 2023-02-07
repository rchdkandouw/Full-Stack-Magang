import mongoose from "mongoose";
const Schema = mongoose.Schema;
const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const User = mongoose.model("user", user);
export const schema = User.schema;
export default User;
