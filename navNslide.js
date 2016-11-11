function slider()
{
	
	$('.slider').css({
		position: 'absolute',
		// left: '-240',
		height: '100%',
		width: '240',
		background: '#407AC7'
	});

	$('.slider a').css({
		color: '#B4DAD6',
		"text-decoration": 'none'
	});

	$('#openNav').ani(function(event) {
		$('.slider').css({
			position: 'absolute',
			left: '-240'
		});
	});	


}

function topSlider()
{

}


function btmSlider()
{

}


function closeNav()
{

}

function resetNav()
{
	var reset = $(".slider, .slider ul, .slider ul li, .slider ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif")
		.css("color", "black");
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

