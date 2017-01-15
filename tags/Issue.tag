import actions from '../src/data/IssueTrackerActions.js';
<issue>
    <td>
        <label class="checkbox-inline"><input type="checkbox" checked={ issue.get('done') } onclick={ parent.toggle } value=""></label>
    </td>
    <td>
        { issue.get('title') }
    </td>
    <td>
        { issue.get('priority') }
    </td>
    <td>
        { issue.get('duedate') }
    </td>
    <td>
        <button type="button" class="btn btn-danger btn-md" onclick={ remove }>
          	<span class="glyphicon glyphicon-trash"></span>
	     </button>
    </td>
    <script>
        this.remove = (evt) => {
            actions.deleteIssue(evt.item.id);
        };

        this.toggle = (evt) => {
            actions.toggleIssue(evt.item.id);
        };
    </script>
</issue>
