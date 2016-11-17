import Project from '../src/Project.js';	
import assert from 'assert';
import MockStorage from './MockStorage.js';
import MockTag from './MockTag.js';

describe('Project', function() {
	describe('getAll()', function() {
		it('should return empty array when no issues saved', function() {
			let collection = new Project({}, new MockStorage());
			assert.equal(0, collection.getAll().length);
		});
	});

	describe('toggleDone()', function() {
		it('should yield no change when no issues saved', function() {
			let collection = new Project({}, new MockStorage());
			collection.toggleDone(42);
			assert.equal(0, collection.getAll().length);
		});
	});

	describe('toggleDone()', function() {
		it('should yield no change when no issues with id in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 1, done: false});
			collection.toggleDone(42);
			assert.equal(false, collection.getAll()[0].done);
		});
	});

	describe('toggleDone()', function() {
		it('should yield change when issues with same id in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 42, done: false});
			collection.toggleDone(42);
			assert.equal(true, collection.getAll()[0].done);
		});
	});

	describe('toggleDone()', function() {
		it('should yield change only on issue with id when multiple issues in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 1, done: false});
			collection.add({id: 2, done: true});
			collection.add({id: 42, done: true});
			collection.toggleDone(42);
			
			assert.equal(false, collection.getAll()[0].done);
			assert.equal(true, collection.getAll()[1].done);
			assert.equal(false, collection.getAll()[2].done);
		});
	});

	describe('toggleDone()', function() {
		it('should yield change on multiple issues with same id when multiple issues in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 42, done: false});
			collection.add({id: 2, done: true});
			collection.add({id: 42, done: true});
			collection.toggleDone(42);
			
			assert.equal(true, collection.getAll()[0].done);
			assert.equal(true, collection.getAll()[1].done);
			assert.equal(false, collection.getAll()[2].done);
		});
	});

	describe('remove()', function() {
		it('should remove issue with same id when multiple issues in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 1});
			collection.add({id: 2});
			collection.add({id: 42});
			collection.remove(42);
			
			assert.equal(2, collection.getAll().length);
		});
	});

	describe('remove()', function() {
		it('should not not yield change when same issue is not in collection', function() {
			let collection = new Project(new MockTag(), new MockStorage());
			collection.add({id: 1});
			collection.add({id: 2});
			collection.add({id: 3});
			collection.remove(42);
			
			assert.equal(3, collection.getAll().length);
		});
	});

});


