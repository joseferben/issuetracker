'use strict';
var storage = require('node-persist');

storage.init().then(function() {
	exports.addProject = function(args, res, next) {
		var project = { 
			title: args.project.value.title,
			issues: args.project.value.issues || []
		}
		storage.setItem(args.project.value.id, project) ;
		res.end();
	}

	exports.deleteProject = function(args, res, next) {
		storage.rm(args.id.value);
		res.end();
	}

	exports.getProject = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(getProject(storage, args.id.value)));
	}

	exports.getProjects = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var projectsIds = storage.keys();
		res.end(JSON.stringify({projects: projectsIds}));
	}

});

function getProject(storage, id) {
	var project = storage.getItemSync(id) || {};
	return {
		id: id,
		title: project.title,
		issues: project.issues
	}
}
