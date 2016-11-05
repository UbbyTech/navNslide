function change()
{
	var background = $(".slider").css("background", "#ccc");
	var margin = $(".slider ul").css("listStyle", "none");
		
}



$(document).ready(function()
{
	if($("nav").hasClass("slider"))
	{
		change();
	}
});

