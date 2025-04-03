import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from './Lab5/PathParameters.js';
import QueryParameters from './Lab5/QueryParameters.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
import WorkingWithArrays from './Lab5/WorkingWithArrays.js';
import cors from "cors";
import UserRoutes from './Kambaz/Users/routes.js';
import session from "express-session";
import CourseRoutes from './Kambaz/Courses/routes.js';
import "dotenv/config";
import EnrollmentRoutes from './Kambaz/Enrollments/routes.js';

const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:5173",
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "development") {
    console.log("Pahucha kya bhia?")
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(
    session(sessionOptions)
);  
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
app.listen(process.env.PORT || 4000)