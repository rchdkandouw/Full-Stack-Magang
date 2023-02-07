import mongoose from "mongoose";
const Schema = mongoose.Schema;
const comment = new Schema({
   name: {
    type : String,
    required:true
   },
   comment:{
    type : String,
    require:true
   },
   date:{
    type : Date,
    default:Date.now
   }
});
const model = mongoose.model('comment', comment);
export const schema = model.schema;
export default model;