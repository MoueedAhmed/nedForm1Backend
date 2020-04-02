function loadValues(tableId){
    var trArr = [];
    var mainTable = $('#'+tableId);
    var tr = mainTable.find('tbody tr');
    tr.each(function(){
        var tdArr=[];
        $(this).find('td').each(function(){

            var values=$(this).find(':text').val();
            if (values!=undefined)
                tdArr.push(values);
        });
        trArr.push(tdArr);
    });
    console.log(trArr);
}

function deleteRow(tableId) {
    try {
        var mainTable = document.getElementById(tableId);
		var rowCount = mainTable.rows.length;

        for(var i=0; i<rowCount; i++) {
            var row = mainTable.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) {
                mainTable.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    }catch(e) {
        console.log(e);
    }
}

function addRow(tableId, rowtag) {
    var row = rowtag;
    $("#"+tableId +" > tbody").append(row);
}


$(document).ready(function () {
    $("#add-row").click(function () {
        addRow('table1', '<tr>'+ '<td><input type="checkbox" name="chk"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '</tr>');
    });

    $("#del-row").click(function () {
        deleteRow('table1');
    });

    $("#add-row-t2").click(function () {
            addRow('table2', '<tr>'+ '<td><input type="checkbox" name="chk"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '<td><input type="text" class="form-control"/></td>'+ '</tr>');
        });

        $("#del-row-t2").click(function () {
            deleteRow('table2');
        });

    $('#enter').click(function () {
       loadValues('table2');
    });
});