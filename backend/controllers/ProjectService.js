const storage = require('node-persist');
const uuid = require('uuid');

function getProject(db, id) {
  const project = db.getItemSync(id) || {};
  return {
    id,
    title: project.title,
    issues: project.issues,
  };
}

storage.init().then(() => {
  exports.addProject = (args, res) => {
    const project = {
      title: args.project.value.title,
      issues: args.project.value.issues || [],
    };
    const id = uuid.v1();
    storage.setItem(id, project);
    res.end(JSON.stringify({
      id,
    }));
  };

  exports.deleteProject = (args, res) => {
    storage.rm(args.id.value);
    res.end();
  };

  exports.getProject = (args, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(getProject(storage, args.id.value)));
  };

  exports.getProjects = (args, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      projects: storage.keys(),
    }));
  };
});
