'use strict';

exports.addPet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pet (NewPet)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deletePet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.findPetById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.findPets = function(args, res, next) {
  /**
   * parameters expected in the args:
  * tags (List)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

