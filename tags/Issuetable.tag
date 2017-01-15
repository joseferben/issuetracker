require('./Issue.tag');
const actions = require('../src/data/IssueTrackerActions.js');

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
            <tr each={ issue in this.issues } data-is="issue"></tr>
        </tbody>
    </table>
    <script>

     this.on('update', () => {
         let issuesMap = opts.store.getState().getIn([opts.projectid, 'issues']);
         this.issues = issuesMap != null ? issuesMap.toArray() : []; 
     });

    </script>
</issuetable>
