require('./Issueform.tag');
require('./Issuetable.tag');
import IssueCollection from '../src/IssueCollection.js';
<App>	
<Issueform></Issueform>
<Issuetable data={getAllIssues()}></Issuetable>
<script>
	this.collection = new IssueCollection(this);
	this.getAllIssues = function() {
		return this.collection.getAll();
	}
</script>
</App>
