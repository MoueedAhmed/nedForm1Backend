function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function loadValuesFromTable(tableId){
    var trArr = [];
    var mainTable = $('#'+tableId);
    var tr = mainTable.find('tbody tr');
    tr.each(function(){
		var tdObj={};
		var i = 1;
        $(this).find('td').each(function(){
            var values=$(this).find(':text').val();
            if (values!=undefined){
				tdObj[i] = values;
				i++;
			}
        });
        trArr.push(tdObj);
    });
    return trArr;
}

$( document ).ready(function() {

    $("#submit").click(function () {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});


    function ajaxPost(){

        $("#submit").text("Please Wait");

		var fullName = $("#fullName").val();
		var department = $("#department").val();
		var rollNo = $("#rollNo").val();
		if(rollNo.length<3){
            $("#submit").text("Submit");
			alert("Enter Roll Number!");
			return;
		}
		var year = $("#year").val();
		var date = $("#date").val();
		var table1 = loadValuesFromTable("table1");
		var table2 = loadValuesFromTable("table2");

    	// PREPARE FORM DATA
    	var formData = {
			"fullName":fullName,
			"department":department,
			"rollNo":rollNo,
			"year":year,
			"date":date,
			"table1":table1,
			"table2":table2
		};

		console.log(formData);

		// var formDataPost = {
		// 	"name":"Murtaza",
		// 	"age":"22",
		// 	"location":"Karachi",
		// 	"mapArrayList":[
		// 			{
		// 				"key":"value"
		// 			}
		// 		]
		// }


		//get request
		// $.ajax({
		// 	url: "http://localhost:8080/getUserDetails",
		// 	headers: {"rollNo": "Kashif"}
		// }).then(function(data) {
		//    console.log(data);
		// });

    //DO POST
   	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "createUser",
			data : JSON.stringify(formData),
			success : function(result) {
				$("body").html("<h1 align='center'>Data has been submitted!</h1>");
				console.log(result);
			},
			error : function(e) {
			    $("#submit").text("Submit Again");
				alert("Something Wrong Kindly Submit again!");
				console.log("ERROR: ", e);
			}
		});
//
//    	// Reset FormData after Posting
//    	resetData();

    }
});