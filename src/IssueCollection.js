import uuid from 'uuid'
export default class IssueCollection {
	constructor(tag) {
		if (tag) {
			this.riot_tag = tag;
		}
		this.initClientId();
	}

	getAll() {
		return this.collection;
	}

	save() {
		localStorage.setItem('issues', JSON.stringify(this.collection));
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
		this.collection = JSON.parse(localStorage.getItem('issues')) || [];	
		this.clientId = localStorage.getItem('clientId') || '';
	}

	initClientId() {
		if (localStorage.getItem('clientId') == null) {
			localStorage.setItem('clientId', uuid.v1());
		}
	}
}


