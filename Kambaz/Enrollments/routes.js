import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentRoutes(app) {
    const findAllEnrollments = async (req, res) => { 
        const enrollments = await enrollmentsDao.findAllEnrollments();
        res.json(enrollments)
    };
    app.get("/api/enrollments", findAllEnrollments);
}