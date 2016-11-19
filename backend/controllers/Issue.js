'use strict';

var url = require('url');

var Issue  = require('./IssueService.js');

module.exports.addIssue = function addIssue (req, res, next) {
	Issue.addIssue(req.swagger.params, res, next);
};

module.exports.deleteIssue = function deleteIssue(req, res, next) {
	Issue.deleteIssue(req.swagger.params, res, next);
};

module.exports.getIssue = function getIssue(req, res, next) {
	Issue.getIssue(req.swagger.params, res, next);
};

module.exports.getIssues = function getIssues(req, res, next) {
	Issue.getIssues(req.swagger.params, res, next);
};

module.exports.toggleIssue = function toggleIssue(req, res, next) {
	Issue.toggleIssue(req.swagger.params, res, next);
}
