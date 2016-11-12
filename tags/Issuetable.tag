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
            <tr each={ issues.getAll() } data-is="issue"></tr>
        </tbody>
    </table>
<script>
	let tag = this;
	this.on('update', function() {
		this.issues = opts.issues;
	})

	this.toggle = (e) => { 
		this.issues.toggleDone(e.item.title);
		console.log(this.issues);
	}
</script>

</issuetable>
