<issue>
        <td>
            <label class="checkbox-inline"><input type="checkbox" checked={ done } onclick={ parent.toggle } value=""></label>
        </td>
        <td>
            { title }
        </td>
        <td>
            { priority }
        </td>
        <td>
            { duedate }
        </td>
	<td>
	     <button type="button" class="btn btn-danger btn-md">
          	<span class="glyphicon glyphicon-trash" onclick={ parent.remove }></span>
	     </button>
	</td>
    <script>
	var tag = this;
    </script>
</issue>
