<issueform>
    <div class="row">
        <div class="col-xs-12">
            <span><h3>Create Issue</h3></span>
            <hr style="width: 100%; color: black; height: 1px; background-color:black;"/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 col-xs-12">
            <div class="form-group">
                <div class='input-group date' id='datetimepicker'>
                    <input type='text' class="form-control"/>
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
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
        </div>
        <div class="col-md-6 col-xs-6">
            <div class="input-group">
                <input maxlength="20" class="form-control" name="primary" id="primary" placeholder="Issue title"
                       type="text">
                <span class="input-group-addon"><i class="glyphicon glyphicon-plus-sign"></i></span>
            </div>
        </div>
    </div>
</issueform>