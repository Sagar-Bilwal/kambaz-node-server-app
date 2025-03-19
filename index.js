import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from './Lab5/PathParameters.js';
import QueryParameters from './Lab5/QueryParameters.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
const app = express()
Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
app.listen(process.env.PORT || 4000)