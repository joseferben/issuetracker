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
        <button type="button" class="btn btn-danger btn-md" onclick={ parent.remove }>
          	<span class="glyphicon glyphicon-trash"></span>
	     </button>
    </td>
    <script>
    </script>
</issue>
