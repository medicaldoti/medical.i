
window.setTimeout(

function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
      $(this).removeClass("opa0");
    } else {
      $(this).removeClass("appeartext");
    }
  });

}, 2000);

$(window).on('load', function() {

  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();
});

// go grow
function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}


$(window).scroll(function () {
	GlowAnimeControl();
});
$(window).on('load', function () {
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay: .' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay: ' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	GlowAnimeControl();
});


// downanime
 function slideAnime(){
    $('.downAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
            }else{
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
            }
        });
  }
  
 
  $(window).scroll(function (){
    slideAnime();
  });

  $(window).on('load', function(){
    slideAnime();
  });