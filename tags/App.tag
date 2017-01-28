import uuid from 'uuid';

import Issueform from './Issueform.tag';
import Issuetable from './Issuetable.tag';
import Navigation from './Navigation.tag';
import actions from '../src/data/IssueTrackerActions.js';
import TodoStore from '../src/data/stores/TodoStore.js';
<App>
    <Navigation store={ this.store }></Navigation>
    <div class="jumbotron">
        <div class="container">
            <Issueform store={ this.store }></Issueform>
            <Issuetable store={ this.store }></Issuetable>
            <button type="button" class="btn { this.store.getState().get('active') == '' ? ' hide ' : '' } btn-danger btn-lg" onclick={ removeProject }> <span class="glyphicon glyphicon-trash"></span> Remove project</button>
        </div>
    </div>

    <script>
     this.store = new TodoStore();
     riot.route.stop();
     riot.route.start(true);

     actions.populateStore();

     this.store.emitter.addListener('change', () => {
         this.update();
     });

     riot.route(projectId => {
         actions.changeProject(projectId);
         this.update();
     });

     this.removeProject = function() {
         actions.deleteProject(this.store.getState().get('active'));
         riot.route('/');
     }
    </script>
</App>
