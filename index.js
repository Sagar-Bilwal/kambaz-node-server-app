import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from './Lab5/PathParameters.js';
import QueryParameters from './Lab5/QueryParameters.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
import WorkingWithArrays from './Lab5/WorkingWithArrays.js';
import cors from "cors";
import UserRoutes from './Kambaz/Users/routes.js';
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
app.listen(process.env.PORT || 4000)