function slider()
{
	
	var background = $(".slider").css("background", "#ccc")
	.css("width", "240");
	var height = $(".slider").css("height", "100%");
	var height = $(".slider").css("width", "240");
	var pos1 = $(".slider").css("position", "absolute");
	var pos2 = $(".slider").css("left", "-240");
	

}

function topSlider()
{

}


function btmSlider()
{

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
		slider();

	}

	else if($("nav").hasClass("sliderTop"))
	{
		resetNav();
		topSlider();
	}

	else if($("nav").hasClass("sliderBtm"))
	{
		resetNav();
		btmSlider();
	}

	else
	{
		return console.log(error);
	}
});

