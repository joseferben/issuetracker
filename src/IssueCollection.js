export default class IssueCollection {
	constructor(tag) {
		this.collection =  [{title: 'test 1', priority: 'high', duedate: '12.12.12'},
			{title: 'test 10', priority: 'low', duedate: '04.11.11'},
			{title: 'test 3', priority: 'low', duedate: '12.09.15'}];

		if (tag) {
			this.riot_tag = tag;
		}
	}

	getAll() {
		return this.collection;
	}

	add(issue) {
		this.collection.push(model);
	}
}


