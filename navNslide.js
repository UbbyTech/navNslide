function change()
{
	var hidecb = $("#openNav").hide();
	if (hidecb.checked())
	{
		$("body").css("background", "blue");
	}


	var background = $(".slider").css("background", "#ccc")
	.css("width", "240");
	var height = $(".slider").css("height", "100%");


}

function resetNav()
{
	var reset = $(".slider, .slider ul, .slider ul li, .slider ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none");
}



$(document).ready(function()
{
	if($("nav").hasClass("slider"))
	{
		resetNav();
		change();

	}

	else if($("nav").hasClass("sliderTop"))
	{

	}

	else
	{

	}
});

