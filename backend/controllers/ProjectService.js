'use strict';
var dirty = require('dirty');
var db = dirty('tracker.db');

db.on('load', function() {
	exports.addProject = function(args, res, next) {
		db.set(args.project.value.id, args.project.value.issues);
		res.end();
	}

	exports.deleteProject = function(args, res, next) {
		db.rm(args.id.value);
		res.end();
	}

	exports.getProject = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(getProject(db, args.id.value)));
	}

	exports.getProjects = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var projectsIds = [];
		db.forEach(function(key, value) { projectsIds.push(key) });
		res.end(JSON.stringify({projects: projectsIds}));
	}

});


function getProject(db, id) {
	return {
		id: id,
		issues: db.get(id)
	}
}
