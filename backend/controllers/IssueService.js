const storage = require('node-persist');
const uuid = require('uuid');

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
});
