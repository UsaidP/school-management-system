import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: String,
  name: String,
  department: String,
  email: String,
  phone: String,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
