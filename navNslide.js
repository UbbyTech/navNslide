// user var declarations and settings

var menu = document.getElementById('mainNav');
var topMenu = document.getElementById('topNav');








// custom styling for vertical slide nav menu

function slider() {
	
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

	$('.slider li a').hover(function() {
		$(this).css({
			background: '#ccc',
			color: '#000000'
		});
	}, function() {
		$(this).css('background', 'none');
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


// custom styling for the right slide nav menu
function rightSlider() {

	$('.slider-right').css({
		position: 'absolute',
		right: 0,
		background: '#407AC7'

	});

	$('.slider-right li').css({
		height: '50px',
		
	});

	$('.slider-right li a').css({
		color: '#B4DAD6',
		"text-decoration": 'none',
		"text-align": 'center',
		"border-bottom": '1px solid black',
		"line-height": '50px'
	});

	$('.slider-right li a').hover(function() {
		$(this).css({
			background: '#ccc',
			color: '#000000'
		});
	}, function() {
		$(this).css('background', 'none');
	});


	$('#openNav').hide(); // hiding input checkbox


	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider-right').css({
				position: 'absolute',
				right: '0',
				transition: '2s'
			});

			$('.slidebtn').css({
				position: 'absolute',
				right: '-240',
				"z-index": '2',
				transition: '2s'
			});
		}

		else
		{
			$('.slider-top').css({
				position: 'absolute',
				right: '-240',
				transition: '1s'
			});

			$('.slidebtn').css({
				position: 'absolute',
				right: '0',
				transition: '2s'
			});
		}
	});

}


// custom styling for horizonal slide nav menu

function topSlider() {
	
	$('.slider-top').css({
		position: 'absolute', // absolute pos for horizontal navs, and fixed for vertical navs
		top: '-100',
		height: '100px',
		width: '100%',
		background-color: '#407AC7'
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

	$('.slider-top li a').hover(function() {
		$(this).css({
			background: '#ccc',
			color: '#000000'
		});
	}, function() {
		$(this).css('background', 'none');
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


function btmSlider() {

	$('.slider-btm').css({
		position: 'fixed',
		bottom: '-100',
		left: '0',
		"z-index": '3',
		height: '100px',
		width: '100%',
		background: '#407AC7'
	});
	
	$('.slider-btm li').css({
		float: 'left',
		height: '100px',
		width: '100px'
	});

	$('.slider-btm li a').css({
		color: '#B4DAD6',
		"text-decoration": 'none',
		"text-align": 'center',
		"border-right": '1px solid black',
		"line-height": '100px'
	});

	$('.slider-btm li a').hover(function() {
		$(this).css({
			background: '#ccc',
			color: '#000000'
		});
	}, function() {
		$(this).css('background', 'none');
	});



	$('#openNav').hide(); // hiding input checkbox




	// for opening and closing the side navigation

	$('#openNav').click(function(event) {
		var isChecked = $(this).is('#openNav:checked');

		if(isChecked == true)
		{
			$('.slider-btm').css({
				position: 'fixed',
				bottom: '0',
				transition: '2s'
			});

			$('.slidebtm').css({
				position: 'relative'
			});
		}

		else
		{
			$('.slider-btm').css({
				position: 'fixed',
				bottom: '-100',
				transition: '1s'
			});

			$('.slidebtn').css({
				position: 'relative'
			});
		}
	});
}


function resetNav()  // resets values for  top, bottom, right, and left nav properties
{

	var reset1 = $(".slider, .slider ul, .slider ul li, .slider ul li a") 
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
	
		.css("font-family", "sans-serif, Verdana, Geneva");

	var reset2 = $(".slider-top, .slider-top ul, .slider-top ul li, .slider-top ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif, Verdana, Geneva");

	var reset3 = $(".slider-btm, .slider-btm ul, .slider-btm ul li, .slider-btm ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif, Verdana, Geneva");

	var reset4 = $(".slider-right, .slider-right ul, .slider-right ul li, .slider-right ul li a")
		.css("display", "block")
		.css("margin", "0")
		.css("padding", "0")
		.css("border", "none")
		.css("outline", "none")
		.css("font-family", "sans-serif, Verdana, Geneva");


	// default reset styling for menu icon
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

	else if($("nav").hasClass("slider-right"))
	{
		resetNav();
		rightSlider();
	}

	else
	{
		var error = console.log();
		alert(error);
	}
});