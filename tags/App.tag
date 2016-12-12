import uuid from 'uuid';
import Issueform from './Issueform.tag';
import Issuetable from './Issuetable.tag';
import Project from '../src/Project.js';
import Navigation from './Navigation.tag';
<App>	
	<Navigation></Navigation>
		<div class="jumbotron">
			<div class="container">
				<Issueform issues={ this.project }></Issueform>
				<Issuetable issues={ this.project }></Issuetable>
				<button type="button" class="btn { this.project.title == '' ? ' hide ' : '' } btn-danger btn-lg" onclick={ this.removeProject }> <span class="glyphicon glyphicon-trash"></span> Remove project</button>
			</div>
		</div>
<script>
	riot.route.stop();
	riot.route.start(true);
	riot.route(projectId => {
		this.project.setProjectId(projectId);
		console.log("updated project id to: ", projectId);
		this.project.fetch();
		this.update();
	});

	this.project = new Project(this, localStorage);
	this.on('mount', function() {
		console.log('fetching collection for project');	
		this.project.fetch();
		this.update();
	});

	this.removeProject = function() {
		this.project.removeProject() 
		this.update();
		riot.route('/');
	}
</script>
</App>
