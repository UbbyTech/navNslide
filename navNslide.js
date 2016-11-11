function slider()
{
	
	$('.slider').css({
		position: 'absolute',
		// left: '-240',
		height: '100%',
		width: '240px',
		background: '#407AC7'
	});
	
	$('.slider li').css({
		height: '50px',
		
	});

	$('.slider li a').css({
		color: '#B4DAD6',
		"text-decoration": 'none',
		"text-align": 'center',
		"border-bottom": '1px solid black',
		"line-height": '50px'
	});

	
	

	$('#openNav').click(function() {

		if($(this).is(':checked'))
		{
			$('.slide').css({
				position: 'absolute',
				left: '-240px'
			});
		}
		
		else if(!$(this).is(':checked'))
		{
			$('.slide').css({
				position: 'absolute',
				left: '0'
			});
		}

		else
		{
			return false;
		}
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
		.css("font-family", "sans-serif");


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

