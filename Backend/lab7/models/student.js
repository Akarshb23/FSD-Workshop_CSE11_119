import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    course : String,
});
const student = mongoose.model("Student",studentSchema);
export default student ;
