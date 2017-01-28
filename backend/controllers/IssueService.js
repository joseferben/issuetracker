const storage = require('node-persist');
const uuid = require('uuid');

const getProjectId = (id, db) => {
  let projectId = 0;
  db.values().forEach((project) => {
    project.issues.forEach((issue) => {
      projectId = issue.id === id ? issue.projectId : projectId;
    });
  });
  return projectId;
};

storage.init().then(() => {
  exports.addIssue = (args, res) => {
    const project = storage.getItemSync(args.id.value) || {};
    const issue = args.issue.value;
    const id = uuid.v1();
    issue.id = id;
    project.issues.push(issue);
    storage.setItem(args.id.value, project);
    res.end(JSON.stringify({
      id,
    }));
  };

  exports.deleteIssue = (args, res) => {
    const project = storage.getItemSync(args.pId.value) || {};
    project.issues = project.issues.filter(cur => cur.id !== args.id.value);
    storage.setItem(args.pId.value, project);
    res.end();
  };

  exports.deleteIssueSimple = (args, res) => {
    const projectId = getProjectId(args.id.value, storage);
    const project = storage.getItemSync(projectId) || {};
    project.issues = project.issues.filter(cur => cur.id !== args.id.value);
    storage.setItem(projectId, project);
    res.end();
  };


  exports.getIssue = (args, res) => {
    res.setHeader('Content-Type', 'application/json');
    const issue = (storage.getItemSync(args.pId.value).issues || [])
          .filter(cur => cur.id === args.id.value);
    res.end(JSON.stringify(issue));
  };

  exports.getIssues = (args, res) => {
    res.setHeader('Content-Type', 'application/json');
    const issues = storage.getItemSync(args.id.value).issues || [];
    res.end((issues || []));
  };

  exports.toggleIssue = (args, res) => {
    const project = storage.getItemSync(args.pId.value) || {};
    const id = args.id.value;
    project.issues.map((cur) => {
      const val = cur;
      val.done = (cur.done || cur.id === id) && !(cur.done && cur.id === id);
      return val;
    });

    storage.setItem(args.pId.value, project);
    res.end();
  };

  exports.toggleIssueSimple = (args, res) => {
    const projectId = getProjectId(args.id.value, storage);
    const project = storage.getItemSync(projectId) || {};
    const id = args.id.value;
    project.issues.map((cur) => {
      const val = cur;
      val.done = (cur.done || cur.id === id) && !(cur.done && cur.id === id);
      return val;
    });

    storage.setItem(projectId, project);
    res.end();
  };
});
