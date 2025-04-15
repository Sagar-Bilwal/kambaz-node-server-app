import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
   _id: String,
   title: String,
   description: String,
   points: Number,
   due_date: String,
   available_date: String,
   course: { type: String, ref: "AssignmentModel" },
 },
 { collection: "assignments" }
);
export default assignmentSchema;