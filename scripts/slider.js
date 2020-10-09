$(document).ready(function(){
	var slideNow = 1;
	$('.slide-nav-btn').first().css({
		'background-color': 'rgb(246,182,74)'
	});
	var slideCount = $('#slidewrapper').children().length;

	var translateWidth = 0;

	function nextSlide() {
	    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
	        $('#slidewrapper').css('transform', 'translate(0, 0)');
	        slideNow = 1;
	    } else {
	        translateWidth = -$('#viewport').width() * (slideNow);
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow++;
	    }
	    $('#nav-btns').children().css({
	    	'background-color': '#777'
	    });
	    $('#nav-btns').children().eq(slideNow - 1).css({
	    	'background-color': 'rgb(246,182,74)'
	    });
	}

	function prevSlide() {
	    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
	        translateWidth = -$('#viewport').width() * (slideCount - 1);
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow = slideCount;
	    } else {
	        translateWidth = -$('#viewport').width() * (slideNow - 2);
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow--;
	    }
	    $('#nav-btns').children().css({
	    	'background-color': '#777'
	    });
	    $('#nav-btns').children().eq(slideNow - 1).css({
	    	'background-color': 'rgb(246,182,74)'
	    });
	}

	$('#next-btn').click(function() {
	    nextSlide();
	});

	$('#prev-btn').click(function() {
	    prevSlide();
	});

	var navBtnId = 0;
	$('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
	    $('#nav-btns').children().css({
	    	'background-color': '#777'
	    });
	    $('#nav-btns').children().eq(slideNow - 1).css({
	    	'background-color': 'rgb(246,182,74)'
	    });
	});
});