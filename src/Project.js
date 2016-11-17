import uuid from 'uuid';
export default class Project {
	constructor(tag, storage) {
		if (tag) {
			this.riot_tag = tag;
		}
		this.storage = storage;
		this.issues = [];
		this.initClientId();
	}

	setProjectId(projectId) {
		this.projectId = projectId;
	}

	getAll() {
		return this.issues;
	}

	save() {
		this.storage.setItem(this.projectId, JSON.stringify(this.issues));
		console.log('saved under project: ', this.projectId);
	}

	add(issue) {
		issue.projectId = this.projectId;
		issue.clientId = this.clientId;
		this.issues.push(issue);
		this.save();
		this.riot_tag.update();
	}
	
	toggleDone(id) {
		this.issues.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
		this.save();
	}

	remove(id) {
		this.issues = this.collection.filter(cur => cur.id !== id);
		this.save();
	}

	fetch() {
		this.issues = JSON.parse(this.storage.getItem(this.projectId)) || [];	
		this.clientId = this.storage.getItem('clientId') || '';
	}

	initClientId() {
		if (this.storage.getItem('clientId') == null) {
			this.storage.setItem('clientId', uuid.v1());
		}
	}
}


