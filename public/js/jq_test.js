$(document).ready(function(){
	$("#intro").hide();
	$("#show_heading").show();
	$("#hide_heading").hide();
	$("p.p1").on({
		"mouseover":function(){
			$("#show_this").fadeIn();
		},
		"mouseout":function(){
			$("#show_this").fadeOut();
		}
	});
	$("#show_heading").click(function(){
		$("#intro").show();
		$("#show_heading").hide();
		$("#hide_heading").show();
	});
	$("#hide_heading").click(function(){
		$("#intro").hide();
		$("#hide_heading").hide();
		$("#show_heading").show();
	});
	$(".textbox").keyup(function(){
		a = Number($("#a").val());
		b = Number($("#b").val());
		sum = a + b;
		$("#sum").val(sum);
	});
	
	//$("#newContent").load("index.html");
	
	$("button[name = 'get_students']").click(function(){
		/*$.get("http://localhost:5000/degree-programs/1",
			function(resp){
				console.log(resp);
			});/**/
		$.post("http://localhost:5000/degree-programs/",{
			code: 'BS Forestry',
			name: 'Bachelor of Science in Forestry'
			}, function(resp){
				console.log(resp);
			});
	});
	$("#reverse").click(function(){
		$("input:checkbox[class=check]").each(function () {
			if($(this).is(":checked")){
				$(this).prop("checked", false);
			}
			else{
				$(this).prop("checked", true);
			}
		});
	});
});
