// custom styling for vertical slide nav menu

function slider()
{
	
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





// custom styling for horizonal slide nav menu

function topSlider()
{
	
	$('.slider-top').css({
		position: 'absolute',
		top: '-100',
		height: '100px',
		width: '100%',
		background: '#407AC7'
	});
	
	$('.slider-top li').css({
		float: 'left',
		height: '100px',
		width: '10%'
		
	});

	$('.slider-top li a').css({
		color: '#B4DAD6',
		"text-decoration": 'none',
		"text-align": 'center',
		"border-right": '1px solid black',
		"line-height": '100px'
	});


	$('#openNav').hide(); // hiding input checkbox




	// for opening and closing the side navigation

	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider-top').css({
				position: 'absolute',
				top: '0',
				transition: '2s'
			});

			$('.slidebtn').css({
				position: 'absolute',
				top: '100px',
				"z-index": '2',
				transition: '2s'
			});
		}

		else
		{
			$('.slider-top').css({
				position: 'absolute',
				top: '-100',
				transition: '1s'
			});

			$('.slidebtn').css({
				position: 'absolute',
				top: '0',
				transition: '2s'
			});
		}
	});
}


function btmSlider()
{

	$('.slider-btm').css({
		position: 'fixed',
		left: '0',
		bottom: '-100',
		"z-index": '3',
		height: '100px',
		width: '100%',
		background: '#407AC7'
	});
	
	$('.slider-btm li').css({
		float: 'left',
		height: '100px',
		width: '10%'
	});

	$('.slider-btm li a').css({
		color: '#B4DAD6',
		"text-decoration": 'none',
		"text-align": 'center',
		"border-right": '1px solid black',
		"line-height": '100px'
	});


	$('#openNav').hide(); // hiding input checkbox




	// for opening and closing the side navigation

	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider-btm').css({
				position: 'absolute',
				bottom: '0',
				transition: '2s'
			});

			$('.slidebtm').css({
				position: 'fixed',
				bottom: '100',
				"z-index": '3',
				transition: '2s'
			});
		}

		else
		{
			$('.slider-btm').css({
				position: 'absolute',
				bottom: '-100',
				transition: '1s'
			});

			$('.slidebtn').css({
				position: 'fixed',
				left: '0',
				"z-index": '3',
				bottom: '100',
				transition: '2s'
			});
		}
	});
}


function resetNav()
{

	// reset for vertical slide nav menu
	var reset1 = $(".slider, .slider ul, .slider ul li, .slider ul li a") 
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
	
		.css("font-family", "sans-serif, Verdana, Geneva");

	// reset for horizontal slide nav menu
	var reset2 = $(".slider-top, .slider-top ul, .slider-top ul li, .slider-top ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif, Verdana, Geneva");


	// reset for bottom slide nav menu
	var reset3 = $(".slider-bottom, .slider-bottom ul, .slider-bottom ul li, .slider-bottom ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif, Verdana, Geneva");


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

	else if($("nav").hasClass("slider-top"))
	{
		resetNav();
		topSlider();
	}

	else if($("nav").hasClass("slider-btm"))
	{
		resetNav();
		btmSlider();
	}

	else
	{
		return console.log(error);
	}
});

