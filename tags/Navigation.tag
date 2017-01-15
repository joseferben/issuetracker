import uuid from 'uuid';
import actions from '../src/data/IssueTrackerActions.js';
<Navigation>
    <nav class="navbar navbar-fixed-top navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Issue Tracker</a>
            </div>
            <div class="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="btn dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Choose project <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li each={ project in this.projects }>
                                <a href="#{ project.get('id') }">{ project.get('title') }</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form id="projectform" class="navbar-form navbar-right">
                    <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="Project name">
                    </div>
                    <button type="button" class="btn btn-dark" onclick={ this.addProject }>Create</button>
                </form>
            </div>
        </div>
    </nav>
    <script>

     let store = opts.store;
     this.addProject = () => {
            actions.addProject(this.projectform.title.value);
        };

     this.on('update', () => {
         this.projects = store.getState().toArray();
     });

    </script>
</Navigation>
