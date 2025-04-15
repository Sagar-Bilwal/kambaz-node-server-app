import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { user: userId, course: courseId, _id: `${userId}-${courseId}` };
 return model.create(newEnrollment);
  // console.log("enrollUserInCourse: User ID = "+ userId)
}

export function unenrollUserInCourse(userId, courseId) {
  return model.deleteOne({ userId, courseId });
}

export function findAllEnrollments() {
  // console.log("All Enrollments================")
  // console.log(Database.enrollments)
  return model.find();
}
