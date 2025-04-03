import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollmentId = uuidv4();
  enrollments.push({ _id: newEnrollmentId, user: userId, course: courseId });
  return newEnrollmentId;
  // console.log("enrollUserInCourse: User ID = "+ userId)
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) => (enrollment.user !== userId || enrollment.course !== courseId));
}

export function findAllEnrollments() {
  // console.log("All Enrollments================")
  // console.log(Database.enrollments)
  return Database.enrollments;
}
