require('./Issueform.tag');
require('./Issuetable.tag');
import IssueCollection from '../src/IssueCollection.js';
<App>	
<Issueform issues={ this.collection }></Issueform>
<Issuetable data={ getAllIssues() }></Issuetable>
<script>
	this.collection = new IssueCollection(this);
	this.getAllIssues = function() {
		return this.collection.getAll();
	}
	this.on('mount', function() {
		console.log('fetching collection from issueList');	
		this.collection.fetch();
		this.update();
	})
</script>
</App>
