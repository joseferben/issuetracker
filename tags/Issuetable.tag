require('./Issue.tag');
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
            <tr each={ issues.getAll() } data-is="issue"></tr>
        </tbody>
    </table>
<script>
	this.toggle = (evt) => { 
		this.issues.toggleDone(evt.item.id);
		this.update();
	}
	
	this.remove = (evt) => {
		console.log(evt);
		this.issues.remove(evt.item.id);
		this.update();
	}

	this.on('update', () => { 
		this.issues = opts.issues;
	})
</script>

</issuetable>
