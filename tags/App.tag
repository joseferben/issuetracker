import uuid from 'uuid';
import Issueform from './Issueform.tag';
import Issuetable from './Issuetable.tag';
import Project from '../src/Project.js';
import Navigation from './Navigation.tag';
import actions from '../src/data/IssueTrackerActions.js';
import TodoStore from '../src/data/stores/TodoStore.js';
<App>
    <Navigation store={ this.store }></Navigation>
    <div class="jumbotron">
        <div class="container">
            <Issueform projectid={ this.projectId } store={ this.store }></Issueform>
            <Issuetable projectid={ this.projectId } store={ this.store }></Issuetable>
            <button type="button" class="btn { this.project.title == '' ? ' hide ' : '' } btn-danger btn-lg" onclick={ this.removeProject }> <span class="glyphicon glyphicon-trash"></span> Remove project</button>
        </div>
    </div>

    <script>
     this.store = new TodoStore();
     riot.route.stop();
     riot.route.start(true);
     riot.route(projectId => {
         this.projectId = projectId;
         console.log("updated project id to: ", projectId);
         this.update();
     });

     this.on('mount', function() {
         console.log('fetching collection for project');
         this.update();
     });

     this.removeProject = function() {
         actions.deleteProject(this.projectId);
         this.update();
         riot.route('/');
     }
    </script>
</App>
