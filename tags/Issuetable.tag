require('./Issue.tag');
<issuetable>
    <table class="table top-buffer">
        <thead>
        <tr>
            <td>Done</td>
            <td>adsasdasd</td>
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
	////this.issues = [{title: 'test 1', priority: 'high', duedate: '12.12.12'},
	//{title: 'test 2', priority: 'low', duedate: '04.11.11'},
	//{title: 'test 3', priority: 'low', duedate: '12.09.15'}];
</script>

</issuetable>
