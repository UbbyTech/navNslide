function slider()
{

	// custom styling for vertical slide nav menu

	
	$('.slider').css({
		position: 'absolute',
		left: '-240',
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


	$('#openNav').hide(); // hiding input checkbox




	// for opening and closing the side navigation

	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider').css({
				position: 'absolute',
				left: '0',
				transition: '2s'
			});
		}

		else
		{
			$('.slider').css({
				position: 'absolute',
				left: '-240',
				transition: '1s'
			});
		}
	});
}

function topSlider()
{
	// custom styling for vertical slide nav menu

	
	$('.slider').css({
		position: 'absolute',
		top: '-240',
		height: '240px',
		width: '100%',
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


	$('#openNav').hide(); // hiding input checkbox




	// for opening and closing the side navigation

	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider').css({
				position: 'absolute',
				top: '0',
				transition: '2s'
			});
		}

		else
		{
			$('.slider').css({
				position: 'absolute',
				top: '-240',
				transition: '1s'
			});
		}
	});
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


	var menuIcon = $(".slideBtn").css({
		display: 'block',
		"font-size" : '2em'
	});


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

