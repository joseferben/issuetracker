import uuid from 'uuid'
export default class IssueCollection {
	constructor(tag, storage) {
		if (tag) {
			this.riot_tag = tag;
		}
		this.storage = storage;
		this.collection = [];
		this.initClientId();
	}

	getAll() {
		return this.collection;
	}

	save() {
		this.storage.setItem('issues', JSON.stringify(this.collection));
	}

	add(issue) {
		issue.clientId = this.clientId;
		this.collection.push(issue);
		this.save();
		this.riot_tag.update();
	}
	
	toggleDone(id) {
		this.collection.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
		this.save();
	}

	remove(id) {
		this.collection = this.collection.filter(cur => cur.id !== id);
		this.save();
	}

	fetch() {
		this.collection = JSON.parse(this.storage.getItem('issues')) || [];	
		this.clientId = this.storage.getItem('clientId') || '';
	}

	initClientId() {
		if (this.storage.getItem('clientId') == null) {
			this.storage.setItem('clientId', uuid.v1());
		}
	}
}


