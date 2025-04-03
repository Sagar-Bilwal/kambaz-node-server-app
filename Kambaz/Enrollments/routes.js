import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentRoutes(app) {
    const findAllEnrollments = (req, res) => { 
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.json(enrollments)
    };
    app.get("/api/enrollments", findAllEnrollments);
}