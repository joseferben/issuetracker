import uuid from 'uuid';
<Navigation>
<nav class="navbar navbar-fixed-top navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Issue Tracker</a>
        </div>
        <div class="navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="btn dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true"
                       aria-expanded="false">Choose project <b class="caret"></b></a>
                    <ul class="dropdown-menu">
			    <li each={ this.projects }>
				    <a href="#{ id }">{ title }</a>
			    </li>
                    </ul>
                </li>
            </ul>
            <form id="projectform" class="navbar-form navbar-right">
                <div class="form-group">
                    <input type="text" class="form-control" name="title" placeholder="Project name" >
                </div>
                <button type="button" class="btn btn-dark" onclick={ addProject.bind(this) }>Create</button>
            </form>
        </div>
    </div>
</nav>
<script>
	let tag = this;
	tag.on('mount', () => {
		console.log('Navigation got mounted');
		tag.updateProjects();
	});

	tag.on('update', () => {
		console.log('Navigation got updated');
	});

	tag.addProject = function() {
		let project = {
			id: uuid.v1(),
			title: tag.projectform.title.value,
			issues: []
		}
		let projects = JSON.parse(localStorage.getItem('projects') || '{}');
		projects[project.id] = project;
		localStorage.setItem('projects', JSON.stringify(projects));
		tag.updateProjects();
		fetch('http://localhost:8080/api/projects/', 
			{
				method: 'POST',
				body: JSON.stringify(project),
				headers: { 'Content-Type': 'application/json' }
			}).then(res => console.log('Project added to backend')).then(cur => this.update()).catch(err => console.log(err));
	}


	tag.updateProjects = function() {
		let projects = JSON.parse(localStorage.getItem('projects') || '{}');
		tag.projects = Object.keys(projects).map(cur => ({id: cur, title: projects[cur].title}));
		tag.update();
		console.log('LocalStorage:', tag.projects);
		fetch('http://localhost:8080/api/projects/').then(res => res.json()).then(res => tag.setProjectIds(res.projects)).catch(err => console.log(err));
	}
	tag.setProjectIds = function(projectIds) {
		let projects = projectIds.map(cur => fetch('http://localhost:8080/api/projects/' + cur).then(res => res.json()).catch(err => console.log(err)));
		Promise.all(projects).then(arr => tag.setProjects(arr));
	}

	tag.setProjects = function(projects) {
		console.log('Backend: ',  projects);
		tag.projects = projects;
		tag.update();
}

</script>
</Navigation>
