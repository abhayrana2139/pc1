import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
  name:{
    type: String,
    required: true,
  },

  FaultyName:{
    type: String,
    req: true
  },
  
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
   type : String
  }


});

export default mongoose.model("Complaint", ComplaintSchema);
