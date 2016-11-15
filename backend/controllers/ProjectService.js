'use strict';
var dirty = require('dirty');
var db = dirty('tracker.db');

var mockProjects = [
	{ 
		id: "1",
		issues: 
		[
			{ 
				id: "1",
				project_id: "1",
				title: "Issue 1",
				date: "12.12.12"
			}
		]
	},
	{ 
		id: "2",
		issues: 
		[
			{ 
				id: "3",
				project_id: "2",
				title: "Issue 3",
				date: "11.11.11"
			},
			{ 
				id: "4",
				project_id: "2",
				title: "Issue 3",
				date: "11.11.11"
			}
		]
	}
]

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
		var issueIds = [];
		db.forEach(function(key, value) { issueIds.push(key) });
		res.end(JSON.stringify({projects: issueIds}));
	}

});


function getProject(db, id) {
	return {
		id: id,
		issues: db.get(id)
	}
}
