import uuid from 'uuid';
export default class Project {
	constructor(tag, storage) {
		if (tag) {
			this.riot_tag = tag;
		}
		this.storage = storage;
		this.issues = [];
		this.title = '';
		this.initClientId();
	}

	setProjectId(projectId) {
		this.projectId = projectId;
	}

	getAll() {
		return this.issues;
	}

	save() {
		let projects = JSON.parse(this.storage.getItem('projects') || '{}');
		projects[this.projectId].issues = this.issues;
		this.storage.setItem('projects', JSON.stringify(projects));
		this.riot_tag.update();
	}

	add(issue) {
		issue.projectId = this.projectId;
		issue.clientId = this.clientId;
		fetch('http://localhost:8080/api/projects/' + this.projectId + '/issues', 
			{
				method: 'POST',
				body: JSON.stringify(issue),
				headers: { 'Content-Type': 'application/json' }
			}).catch(err => console.log(err));
		this.issues.push(issue);
		this.save();
	}

	toggleDone(id) {
		fetch('http://localhost:8080/api/projects/' + this.projectId + '/issues/' + id + '/toggle',
			{
				method: 'POST',
				beody: '{}',
				headers: { 'Content-Type': 'application/json'}
			}).catch(err => console.log(err));
		this.issues.forEach((cur, idx, arr) => arr[idx].done = (cur.done || cur.id === id) && !(cur.done && cur.id === id));
		this.save();
	}

	remove(id) {
		fetch('http://localhost:8080/api/projects/' + this.projectId + '/issues/' + id, { method: 'DELETE' }).catch(err => console.log(err));
		this.issues = this.issues.filter(cur => cur.id !== id);
		this.save();
	}

	removeProject() {
		fetch('http://localhost:8080/api/projects/' + this.projectId, { method: 'DELETE' }).catch(err => console.log(err));
		let projects = JSON.parse(this.storage.getItem('projects') || '{}');
		delete projects[this.projectId];
		this.storage.setItem('projects', JSON.stringify(projects));
		this.riot_tag.update();
	}

	setIssues(issues) {
		this.issues = issues;
		this.save();
	}

	fetch() {
		let projects = JSON.parse(this.storage.getItem('projects') || '{}');
		this.issues = projects != null && projects[this.projectId] != null ? projects[this.projectId].issues : [];	
		this.title = projects != null && projects[this.projectId] != null ? projects[this.projectId].title : '';
		this.clientId = this.storage.getItem('clientId') || '';
		fetch('http://localhost:8080/api/projects/' + this.projectId).then(res => res.json()).then(res => this.setIssues(res.issues)).catch(err => console.log(err));
	}

	initClientId() {
		if (this.storage.getItem('clientId') == null) {
			this.storage.setItem('clientId', uuid.v1());
		}
	}
}


