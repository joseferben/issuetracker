require('./Issue.tag');
const action = require('../src/data/IssueTrackerActions.js');

<issuetable>
    <table class="table top-buffer">
        <thead>
            <tr>
                <td>Done</td>
                <td>Title</td>
                <td>Priority</td>
                <td>Due to</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr each={ this.issues } data-is="issue"></tr>
        </tbody>
    </table>
    <script>

     let store = opts.store,
         projectId = opts.projectId;

     this.toggle = (evt) => {
         action.toggleIssue(evt.item.id);
         this.update();
     };

     this.remove = (evt) => {
         action.deleteIssue(evtl.item.id);
         this.update();
     };

     this.on('update', () => {
         let issuesMap = store.getState().getIn([projectId, 'issues']);
         this.issues = issuesMap != null ? issuesMap.toArray() : []; 
     });

    </script>
</issuetable>
