$(function() {
	setupDynamics();

	function setupDynamics(){
		$width = $(window).width();
		console.log($width);
		if ($width < 768) {
			createPortfolio(500,417,1);
		};

		if ($width < 992 && $width >= 768) {
			createPortfolio(340,283,2);
		};
		if ($width > 992 && $width >= 768) {
			createPortfolio(400,333,2);
		};
		if ($width > 1200) {
			createPortfolio(340,283,3);
		};
	}
	// Window Size Variation
	$(window).resize(function(){
		$width = $(window).width();
		
		if ($width < 768) {
			console.log($width);
			createPortfolio(400,333,1);
		};

		if ($width < 992 && $width >= 768) {
			console.log($width);
			createPortfolio(340,283,2);
		};
		if ($width > 992 && $width >= 768) {
			console.log($width);
			createPortfolio(400,333,2);
		};
		if ($width > 1200) {
			console.log($width);
			createPortfolio(340,283,3);
		};

	});

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

	function createPortfolio(Width, Height, Col){
		var port = $('.portfolio-item');
		var portFigure = $('.portfolio-item>figure');
		var counting = -1;
		for (var i = 0; i < port.length; i++){
		    if(i%Col===0){
		        counting++;
		    }
		    var newLeft = i%Col*Width+"px";
		    var newTop = counting*Height+"px";
		    var newWid = Width-40+"px";
		    var newHei = Height-40+"px";
		    port.eq(i).css({
		        "left":newLeft,
		        "top":newTop
		    });
		    portFigure.eq(i).css({
		        "width":newWid,
		        "height":newHei
		    });
		}
		$('#portfolio').css({
			"height":(counting+1)*Height+"px",
			"width":Col*Width+"px"
		});
	}

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

