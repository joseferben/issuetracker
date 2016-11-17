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
			<li each={ this.items } data-is="item">
                        <li><a href="#">Project 1</a></li>
                        <li><a href="#">Project 2</a></li>
                        <li><a href="#">Project 3</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-right">
                <div class="form-group">
                    <input type="text" class="form-control" name="project-name" placeholder="Project name">
                </div>
                <button type="submit" class="btn btn-dark">Create</button>
            </form>
        </div>
    </div>
</nav>
<script>
</script>
</Navigation>
