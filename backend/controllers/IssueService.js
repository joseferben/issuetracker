'use strict';
var dirty = require('dirty');
var db = dirty('tracker.db');

db.on('load', function() {
	exports.addIssue = function(args, res, next) {
		var issues = db.get(args.id.value);
		issues.push(args.issue.value);
		db.set(args.id.value, issues);
		res.end();
	}

	exports.deleteIssue = function(args, res, next) {
		var issues = db.get(args.pId.value);
		console.log(issues);
		db.set(args.pId.value, issues.filter(function(cur) { return cur.id !== args.id.value}));
		res.end();
	}

	exports.getIssue = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var issue = db.get(args.pId.value).filter(function(cur) {
			return cur.id === args.id.value
		});
		res.end(JSON.stringify(issue));
	}

	exports.getIssues = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var issueIds = [];
		var issues = db.get(args.id.value);  
		res.end(JSON.stringify(issues || []));
	}

});
