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
			<NavigationItem></NavigationItem>
                        <li><a href="#{ this.projects[0] }">Project 1</a></li>
                        <li><a href="#{ this.projects[1] }">Project 2</a></li>
                        <li><a href="#{ this.projects[2] }">Project 3</a></li>
                        <li><a href="#{ this.projects[3] }">Project 4</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-right">
                <div class="form-group">
                    <input type="text" class="form-control" name="project-name" placeholder="Project name" >
                </div>
                <button type="submit" class="btn btn-dark" onclick={ parent.addProject }>Create</button>
            </form>
        </div>
    </div>
</nav>
<script>
this.projects = Object.keys(JSON.parse(localStorage.getItem('projects') || '[]'));

this.setProjects = function(projects) {
	this.projects = projects;
	console.log('them projects: ', this.projects);
}

fetch('http://localhost:8080/api/projects/').then(res => res.json()).then(res => this.setProjects(res.projects)).catch(err => console.log(err));


</script>
</Navigation>
