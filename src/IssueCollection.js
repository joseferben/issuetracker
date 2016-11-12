export default class IssueCollection {
	constructor(tag) {
		if (tag) {
			this.riot_tag = tag;
		}
	}

	getAll() {
		return this.collection;
	}

	save() {
		localStorage.setItem('issues', JSON.stringify(this.collection));
	}

	add(issue) {
		this.collection.push(issue);
		this.save();
		this.riot_tag.update();
	}

	fetch() {
		this.collection = JSON.parse(localStorage.getItem('issues')) || [];
	}
}


