require('./Issue.tag');
<issuetable>
    <table class="table top-buffer">
        <thead>
        <tr>
            <td>Done</td>
            <td>Title</td>
            <td>Priority</td>
            <td>Due to</td>
        </tr>
        </thead>
        <tbody>
            <tr each={issues} data-is="issue"></tr>
        </tbody>
    </table>
<script>
	this.on('update', function() {
		this.issues = opts.data;
	})
</script>

</issuetable>
