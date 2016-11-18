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
		//TODO(rest api)
		let projects = JSON.parse(this.storage.getItem('projects') || '{}');
		projects[this.projectId] = this.issues;
		this.storage.setItem('projects', JSON.stringify(projects));
	}

	add(issue) {
		//TODO(rest api)
		issue.projectId = this.projectId;
		issue.clientId = this.clientId;
		this.issues.push(issue);
		this.save();
		this.riot_tag.update();
	}
	
	toggleDone(id) {
		//TODO(rest api)
		this.issues.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
		this.save();
	}

	remove(id) {
		//TODO(rest api)
		this.issues = this.issues.filter(cur => cur.id !== id);
		this.save();
	}

	setIssues(issues) {
		this.issues = issues;
		this.save();
		this.riot_tag.update();
	}

	fetch() {
		fetch('http://localhost:8080/api/projects/' + this.projectId).then(res => res.json()).then(res => this.setIssues( res.issues)).catch(err => console.log(err));
		let projects = JSON.parse(this.storage.getItem('projects') || '{}');
		this.issues = projects != null && projects[this.projectId] != null ? projects[this.projectId] : [];	
		this.clientId = this.storage.getItem('clientId') || '';
	}

	initClientId() {
		if (this.storage.getItem('clientId') == null) {
			this.storage.setItem('clientId', uuid.v1());
		}
	}
}


