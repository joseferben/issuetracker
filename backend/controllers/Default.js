'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addPet = function addPet (req, res, next) {
  Default.addPet(req.swagger.params, res, next);
};

module.exports.deletePet = function deletePet (req, res, next) {
  Default.deletePet(req.swagger.params, res, next);
};

module.exports.findPetById = function findPetById (req, res, next) {
  Default.findPetById(req.swagger.params, res, next);
};

module.exports.findPets = function findPets (req, res, next) {
  Default.findPets(req.swagger.params, res, next);
};
