'use strict';
var storage  = require('node-persist');

storage.init().then(function() {
	exports.addIssue = function(args, res, next) {
		var issues = JSON.parse(storage.getItemSync(args.id.value) || '[]');
		issues.push(args.issue.value);
		storage.setItem(args.id.value, issues);
		res.end();
	}

	exports.deleteIssue = function(args, res, next) {
		var issues = storage.getItemSync(args.pId.value) || [];
		storage.setItem(args.pId.value, issues.filter(function(cur) { return cur.id !== args.id.value }));
		res.end();
	}

	exports.getIssue = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var issue = (storage.getItemSync(args.pId.value) || []).filter(function(cur) {
			return cur.id === args.id.value
		});
		res.end(JSON.stringify(issue));
	}

	exports.getIssues = function(args, res, next) {
		res.setHeader('Content-Type', 'application/json');
		var issues = storage.getItemSync(args.id.value) || [];  
		res.end((issues || []));
	}
	
	exports.toggleIssue = function(args, res, next) {
		var issues = storage.getItemSync(args.pId.value) || [];  
		issues.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
		storage.setItem(args.pId.value, issues);
		res.end();
	}
});
