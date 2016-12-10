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
                <button type="button" class="btn btn-dark" onclick={ parent.addProject.bind(this) }>Create</button>
            </form>
        </div>
    </div>
</nav>
<script>
	this.on('mount', () => {
		let projects = JSON.parse(localStorage.getItem('projects') || '{}');
		this.projects = Object.keys(projects).map(cur => ({id: cur, title: projects[cur].title}));

		fetch('http://localhost:8080/api/projects/').then(res => res.json()).then(res => this.setProjectIds(res.projects)).catch(err => console.log(err));
	});

	this.setProjectIds = function(projectIds) {
		let projects = projectIds.map(cur => fetch('http://localhost:8080/api/projects/' + cur).then(res => res.json()).catch(err => console.log(err)));
		Promise.all(projects).then(arr => this.setProjects(arr));
	}

	this.setProjects = function(projects) {
		this.projects = projects;
		this.update();
	}

</script>
</Navigation>
