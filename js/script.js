$(function() {
	$(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if(scrolled>200){
      	$('header').addClass('header-shrink');
      }else{
      	$('header').removeClass('header-shrink');
      }
   });

	$(".nav-link").click(function(){
		var thisId = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(thisId).offset().top-70 }, 750);
		return false;
	});

	var randomColor = setInterval(colorGrid,3000);

	function colorGrid(){
		var piece = $('.piece-back');
		var pieceSize = piece.length;
		var randomNumber = Math.floor(Math.random()*pieceSize);
		var selected = piece.eq(randomNumber);
		selected.toggleClass('nograyscale img-scale').delay(1500).promise().done(function(){
			$(this).removeClass('nograyscale img-scale');
			//console.log("remove")
		});
	};

	$(".grid-piece").hover(function(){
		$(this).children('.piece-front').addClass('top-fix');
		$(this).children('.piece-back').addClass('img-scale nograyscale');
		clearInterval(randomColor);
	},function(){
		$(this).children('.piece-front').removeClass('top-fix');
		$(this).children('.piece-back').removeClass('img-scale nograyscale');
		randomColor = setInterval(colorGrid,3000);
	});

	function createPortfolio(){
		var port = $('.portfolio-item');
		var counting = -1;
		for (var i = 0; i < port.length; i++){
		    if(i%3===0){
		        counting++;
		    }
		    var newLeft = i%3*110+"px";
		    var newTop = counting*110+"px";
		    port.eq(i).css({
		        "left":newLeft,
		        "top":newTop
		    });
		}
	}

	createPortfolio();

});

