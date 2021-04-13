jQuery(document).ready(function() {

// BEGIN of script for top-slider
	$('.top-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 6000,
		fade: true,
		pauseOnHover: false,
		speed: 1000,
		dots: true,
	});
	$('.top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.top-slider .slide-item').addClass("slide-zoomIn")
		setTimeout(function() {
			$('.top-slider .slide-item').removeClass("slide-zoomIn");
		}, 10);
	});
// END of script for top-slider

// BEGIN of script for slider-simple
	$('.slider-simple').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3500,
		fade: false,
		pauseOnHover: false,
		speed: 500,
	});
// END of script for slider-simple

// BEGIN of script for slider-testimonials
	$('.slider-testimonials').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 4500,
		fade: true,
		pauseOnHover: false,
		speed: 1500,
	});
// END of script for slider-testimonials

// BEGIN of script for slider-5-per-row
	$('.slider-5-per-row').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 1500,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		variableWidth: true,
		// centerMode: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
		]
	});
// END of script for slider-5-per-row

// BEGIN of script for connected sliders
	$('.connected-slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.connected-slider-thumbinal',
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplaySpeed: 3500,
		fade: true,
		pauseOnHover: false,
		speed: 600,
	});
	$('.connected-slider-thumbinal').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.connected-slider-big',
		focusOnSelect: true,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		centerMode: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					variableWidth: false,
					centerMode: false,
				}
			},
		]
	});
// BEGIN of script for connected sliders

// BEGIN of script for header submenu
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
// END of script for header submenu

// BEGIN of script to stick header
	$(window).scroll(function(){
		var sticky = $('header'),
			scroll = $(window).scrollTop();
		if (scroll > 60) {
			sticky.addClass('header-fixed');
		} else {
			sticky.removeClass('header-fixed');
		};
	});
// END of script to stick header

// BEGIN of script for back-to-top btn
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
		backToTop = function() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('.back-to-top').addClass('show');
			} else {
				$('.back-to-top').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function() {
			backToTop();
		});
		$('.back-to-top').on('click', function(e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
// END of script for back-to-top btn

// BEGIN of script for page .content min height
	function contentMinHeight() {
		var _windowH = $(window).outerHeight(true);
		var _headerH = $('header').outerHeight(true);
		var _footerH = $('footer').outerHeight(true);
		if (($('header').css('position') == 'fixed') || ($('header').css('position') == 'absolute')) {
			_headerH = 0;
		};
		var _contentMinH = _windowH - _headerH - _footerH;
		$('.content').css('min-height', _contentMinH+'px');
	};
	contentMinHeight();
	$(window).resize(function(){
		contentMinHeight();
	});
// BEGIN of script for page .content min height

// BEGIN of script for inputs form styles
	function inputNotEmpty() {
		$('.input-wr input, .input-wr textarea').each(function(){
			if ($(this).val().length > 0) {
				$(this).parents('.input-wr').addClass('input-not-empty');
				$(this).parents('.input-wr').removeClass('input-empty');
			} else {
				$(this).parents('.input-wr').removeClass('input-not-empty');
				$(this).parents('.input-wr').addClass('input-empty');
			}
		});
	};
	inputNotEmpty();
	$('.input-wr input, .input-wr textarea').focus(function(){
		$(this).parents('.input-wr').addClass('input-focused');
		inputNotEmpty();
	});
	$('.input-wr input, .input-wr textarea').blur(function(){
		$(this).parents('.input-wr').removeClass('input-focused');
		inputNotEmpty();
	});
// END of script for inputs form styles

// BEGIN of script for scrollTo anchors
	$('.scrollto').click( function(){
		var scroll_el = $(this).attr('href');
		var headerHeight = $('header').outerHeight();
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 600);
		}
		return false;
	});
// END of script for scrollTo anchors

// BEGIN of script to init typed.js
	if ($('#typed').length) {
		var typed = new Typed("#typed", {
			stringsElement: '#typed-strings',
			typeSpeed: 80,
			backSpeed: 30,
			backDelay: 1500,
			startDelay: 1000,
			loop: true,
			cursorChar: '|',
		});
	} else {}
// END of script to init typed.js

// BEGIN of script to init select2MultiCheckboxes
	$('.select-styled').select2MultiCheckboxes({
		templateSelection: function(selected, total) {
			return "Selected " + selected.length + " of " + total;
		}
	});
// END of script to init select2MultiCheckboxes

// BEGIN of script for geolocation button
	$('.btn-location').click(function() {
		geoFindMe();
	});
	function geoFindMe() {
		if (!navigator.geolocation){
			alert("Geolocation is not supported by your browser!");
			return;
		}
		function success(position) {
			var latitude  = position.coords.latitude;
			var longitude = position.coords.longitude;
			var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&language=en';
			console.log(GEOCODING);
			$.getJSON(GEOCODING).done(function(location) {
				console.log(location.results[0].formatted_address);
				$('.input-location').val(location.results[0].formatted_address);
			})
			var img = new Image();
			img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300";
			console.log(img.src);
		};
		function error(err) {
			alert("Unable to retrieve your location!");
			console.log(err)
		};
		navigator.geolocation.getCurrentPosition(success, error);
	}
// END of script for geolocation button

// BEGIN of script to init google.maps.places.Autocomplete
	function initialize() {
		var input = document.getElementsByClassName('input-location');
		// var autocomplete = new google.maps.places.Autocomplete(input);
		for (i = 0; i < input.length; i++) {
			var autocomplete = new google.maps.places.Autocomplete(input[i]);
			var autoinput = input[i];
			google.maps.event.addListener(autocomplete, 'place_changed', function() {
				console.log("places changed");
				
				var place = autocomplete.getPlace();

				console.log(place.geometry.location.lat()+","+place.geometry.location.lng());
				console.log(autoinput.getAttribute("data-location-field"));

				coord = [place.geometry.location.lat(),place.geometry.location.lng()];

				document.getElementById(autoinput.getAttribute("data-location-field")).value=coord;
			});
		}
	}
	google.maps.event.addDomListener(window, 'load', initialize);
// END of script to init google.maps.places.Autocomplete











// // BEGIN of script for map init
// // When the window has finished loading create our google map below
// if ($('#map').length) {
// 	google.maps.event.addDomListener(window, 'load', initMap);
// } else {}

// function initMap() {

// 	var _mapLat = parseFloat($('#map').attr('data-mapLat'));
// 	var _mapLng = parseFloat($('#map').attr('data-mapLng'));
// 	var _mapZoom = parseFloat($('#map').attr('data-mapZoom'));
// 	// Basic options for a simple Google Map
// 	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
// 	var mapOptions = {
// 		zoom: _mapZoom,
// 		scrollwheel: false,
// 		draggable: true,
// 		zoomControl: true,
// 		disableDoubleClickZoom: false,

// 		// The latitude and longitude to center the map (always required)
// 		center: new google.maps.LatLng( _mapLat, _mapLng), // New York

// 		// How you would like to style the map. 
// 		// This is where you would paste any style found on Snazzy Maps.
// 		styles: []
// 	};

// 	// Get the HTML DOM element that will contain your map
// 	// We are using a div with id="map" seen below in the <body>
// 	var mapElement = document.getElementById('map');

// 	// Create the Google Map using our element and options defined above
// 	var map = new google.maps.Map(mapElement, mapOptions);

// 	// Let's also add a marker while we're at it
// 	var marker = new google.maps.Marker({
// 		position: new google.maps.LatLng( _mapLat, _mapLng),
// 		map: map,
// 		title: 'Deployment Matters',
// 		icon: './css/img/i-marker.png'
// 	});
// }
// // END of script for map init















});

window.onload = function() {

	// BEGIN of script for page loader
		$('.spinner-wr').fadeOut(900,function(){
			$(this).remove();
		});
		$('body').addClass('loaded');
	// END of script for page loader

	// BEGIN of script for init wow.js for animate.css
		if(Modernizr.cssanimations) {
			wow = new WOW({
				mobile: false,
			});
			wow.init();
		}
	// END of script for init wow.js for animate.css

	// BEGIN of script for columnsSliderHeight
		function columnsSliderHeight() {
			$('.columns-item-min-height').each(function(){
				var _sliderHeight = $(this).outerHeight();
				$(this).parents('.columns-same-height-item').find('.columns-item-counted-height').css('height',_sliderHeight+'px');
			});
		}
		columnsSliderHeight();
		$(window).resize(function(){
			columnsSliderHeight();
		});
	// END of script for columnsSliderHeight

};
