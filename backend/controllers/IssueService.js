'use strict';
const storage = require('node-persist'),
    uuid = require('uuid');

storage.init().then(function() {
    exports.addIssue = function(args, res, next) {
            let project = storage.getItemSync(args.id.value) || {};
            let issue = args.issue.value;
            let id = uuid.v1();
            issue.id = id;
            project.issues.push(issue);
            storage.setItem(args.id.value, project);
            res.end(JSON.stringify({
                id: id,
            }));
        },

        exports.deleteIssue = function(args, res, next) {
            let project = storage.getItemSync(args.pId.value) || {};
            project.issues = project.issues.filter(function(cur) {
                return cur.id !== args.id.value;
            });
            storage.setItem(args.pId.value, project);
            res.end();
        },

        exports.getIssue = function(args, res, next) {
            res.setHeader('Content-Type', 'application/json');
            let issue = (storage.getItemSync(args.pId.value).issues || []).filter(function(cur) {
                return cur.id === args.id.value;
            });
            res.end(JSON.stringify(issue));
        },

        exports.getIssues = function(args, res, next) {
            res.setHeader('Content-Type', 'application/json');
            let issues = storage.getItemSync(args.id.value).issues || [];
            res.end((issues || []));
        },

        exports.toggleIssue = function(args, res, next) {
            let project = storage.getItemSync(args.pId.value) || {};
            let id = args.id.value;
            project.issues.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
            storage.setItem(args.pId.value, project);
            res.end();
        };
});
