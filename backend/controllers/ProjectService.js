'use strict';
const storage = require('node-persist'),
    uuid = require('uuid');

storage.init().then(function() {
    exports.addProject = function(args, res, next) {
            let project = {
                title: args.project.value.title,
                issues: args.project.value.issues || []
            };
            let id = uuid.v1();
            storage.setItem(id, project);
            res.end(JSON.stringify({
                id: id,
            }));
        },

        exports.deleteProject = function(args, res, next) {
            storage.rm(args.id.value);
            res.end();
        },

        exports.getProject = function(args, res, next) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(getProject(storage, args.id.value)));
        },

        exports.getProjects = function(args, res, next) {
            res.setHeader('Content-Type', 'application/json');
            let projectsIds = storage.keys();
            res.end(JSON.stringify({
                projects: projectsIds
            }));
        };

});

function getProject(storage, id) {
    let project = storage.getItemSync(id) || {};
    return {
        id: id,
        title: project.title,
        issues: project.issues
    };
}
