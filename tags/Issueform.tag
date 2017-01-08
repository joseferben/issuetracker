import uuid from 'uuid'
<issueform>
    <form id='issueform'>
        <div class="row">
            <div class="col-xs-12">
                <span><h3>Create Issue {opts.project.title != '' ? ' - ' + opts.project.title : ''}</h3></span>
                <hr style="width: 100%; color: black; height: 1px; background-color:black;" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="form-group">
                    <div class='input-group date' id='datetimepicker'>
                        <input type='text' id='date' class="form-control" />
                        <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-xs-6">
                <div class="form-group">
                    <select class="form-control" id="prio">
                    <option value="" selected disabled>Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                </div>
            </div>
            <div class="col-md-6 col-xs-6">
                <div class="input-group">
                    <input maxlength="20" class="form-control" name="title" id="primary" placeholder="Issue title" type="text">
                    <span class="input-group-addon" onclick={ submit }><i class="glyphicon glyphicon-plus-sign"></i></span>
                </div>
            </div>
        </div>
    </form>
    <script>
        let tag = this,
            project = opts.project;

        tag.submit = () => {
            if (tag.issueform.title.value !== '') {
                project.add({
                    id: uuid.v1(),
                    title: tag.issueform.title.value,
                    priority: tag.issueform.prio.value,
                    duedate: tag.issueform.date.value,
                    done: false
                });
            }
            tag.issueform.title.value = '';
            tag.issueform.prio.value = '';
            tag.issueform.date.value = '';
        }
    </script>
</issueform>
