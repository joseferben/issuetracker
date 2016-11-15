export default class MockStorage {
	constructor() {
		this.map = new Map();
	}

	getItem(name) {
		return this.map.get(name);
	}	

	setItem(key, object) {
		this.map.set(key, object);
	}
}	
