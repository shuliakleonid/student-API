import mongoose from 'mongoose';

const Student = new mongoose.Schema({
  name:{ type: String, required: true },
  school:{ type: String, required: true },
  avatar:{ type:String }
})

export default mongoose.model('Student', Student)
