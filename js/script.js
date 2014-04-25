$(function() {
	$(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if(scrolled>10){
      	$('header').addClass('header-shrink');
      }else{
      	$('header').removeClass('header-shrink');
      }
      var aboutOffset = $("#about").offset().top;
      if(scrolled>aboutOffset-70 && scrolled<aboutOffset){
      	colorGridMove();
      	console.log(aboutOffset);
      }
   });

	$(".nav-link").click(function(){
		var thisId = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(thisId).offset().top-70 }, 750);
		return false;
	});

	//var randomColor = setInterval(colorGrid,3000);

	function colorGridMove(){
		var piece = $('.piece-back');
		var pieceSize = piece.length;
		for (var i = 0; i < pieceSize; i++) {
			(function(i){
				setTimeout(function(){
					piece.eq(i).addClass('nograyscale img-scale');
				}, 250*i);
			});
			(function(i){
				setTimeout(function(){
					piece.eq(i).removeClass('nograyscale img-scale');
				}, 250*i);
			});
			
		};
	};

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
		// clearInterval(randomColor);
	},function(){
		$(this).children('.piece-front').removeClass('top-fix');
		$(this).children('.piece-back').removeClass('img-scale nograyscale');
		// randomColor = setInterval(colorGrid,3000);
	});

	function createPortfolio(Width, Height){
		var port = $('.portfolio-item');
		var counting = -1;
		for (var i = 0; i < port.length; i++){
		    if(i%3===0){
		        counting++;
		    }
		    var newLeft = i%3*Width+"px";
		    var newTop = counting*Height+"px";
		    port.eq(i).css({
		        "left":newLeft,
		        "top":newTop
		    });
		}
		$('#portfolio').css({
			"height":(counting+1)*Height+"px",
			"width":3*Width+"px"
		});
	}

	createPortfolio(340,283);

	$("figure").hover(function(){
		$(this).children('img').addClass('portfolio-img-fix');
		$(this).children('.info-backdrop').addClass('top-fix');
		$(this).children('.info').addClass('top-fix-50');
		console.log("maybe");
	},function(){
		$(this).children('img').removeClass('portfolio-img-fix');
		$(this).children('.info-backdrop').delay(200).removeClass('top-fix');
		$(this).children('.info').removeClass('top-fix-50');
		console.log("okay");
	});


	function setArticleWidth(){
		var wid = $(".article-img>img").css("width");
		$(".article-img").css("width",wid);
	}
	setArticleWidth();

});

