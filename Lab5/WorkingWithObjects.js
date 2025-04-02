const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
const module = {
  id: "1", name: "Test Module", description: "This is a test module to learn Node js",
  course: "Learn Node js"
}
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (_, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (_, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:title", (req, res) => {
      const {title} = req.params
      assignment.title = title
      res.json(assignment);
    });

    app.get("/lab5/module", (_, res) => {
      res.json(module);
    });

    app.get("/lab5/module/name", (_, res) => {
      res.json(module.name);
    });
    
    app.get("/lab5/module/update/name", (req, res) => {
      const { name } = req.query;
      module.name = name;
      res.send("Module Name updated successfully");
    });

    app.get("/lab5/assignment/update/score", (req, res) => {
      const { score } = req.query;
      assignment.score = score;
      res.send("Assignment Score updated successfully");
    });

    app.get("/lab5/assignment/update/completed", (req, res) => {
      
      const { completed } = req.query;
      assignment.completed = completed;
      res.send("Assignment Status updated successfully");
    });

    app.get("/lab5/module/update/description", (req, res) => {
      const { description } = req.query;
      module.description = description;
      res.send("Module Description updated successfully");
    });
  };
  