'use strict';

var url = require('url');

var Project = require('./ProjectService.js');

module.exports.addProject = function addProject (req, res, next) {
	Project.addProject(req.swagger.params, res, next);
};

module.exports.deleteProject = function deleteProject (req, res, next) {
	Project.deleteProject(req.swagger.params, res, next);
};

module.exports.getProjects = function getProjects(req, res, next) {
	Project.getProjects(req.swagger.params, res, next);
};

module.exports.getProject = function getProject(req, res, next) {
	Project.getProject(req.swagger.params, res, next);
};
