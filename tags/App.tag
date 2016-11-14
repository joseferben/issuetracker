import Issueform from './Issueform.tag';
import Issuetable from './Issuetable.tag';
import IssueCollection from '../src/IssueCollection.js';
import Navigation from './Navigation.tag';
<App>	
	<Navigation></Navigation>
		<div class="jumbotron">
			<div class="container">
				<Issueform issues={ this.collection }></Issueform>
				<Issuetable issues={ this.collection }></Issuetable>
			</div>
		</div>
<script>
	this.collection = new IssueCollection(this, localStorage);
	this.on('mount', function() {
		console.log('fetching collection from issueList');	
		this.collection.fetch();
		this.update();
	})
</script>
</App>
