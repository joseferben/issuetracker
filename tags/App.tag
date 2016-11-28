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

	this.addProject = function() {
		let project = {
			id: uuid.v1(),
			issues: []
		}
		let projects = JSON.parse(localStorage.getItem('projects') || '{}');
		projects[project.id] = project;
		localStorage.setItem('projets', JSON.stringify(projects));
		fetch('http://localhost:8080/api/projects/', 
			{
				method: 'POST',
				body: JSON.stringify(project),
				headers: { 'Content-Type': 'application/json' }
			}).catch(err => console.log(err));

		console.log("adding project");
		this.update();
	}
</script>
</App>
