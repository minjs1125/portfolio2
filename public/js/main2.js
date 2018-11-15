
var ani = new SpaAni(".page", ".ani", 300);

function oneBox() {
	$(".onebox").css({"top":"-10rem"});
	$(".onebox").show().animate({"top":"10rem"}, 1000, "swing");
}

function oneNumber() {
	$(".one").css({"left":"-30rem"});
	$(".one").show().animate({"left":"-5rem"}, 800, "swing", function(){
		/* 숫자와 글자 위아래로 움직이는 애니메이션 infinte
		$(".onebox").animate({"top":"8rem","top":"10rem"},1000,"Infinity"),$(".one").animate({"bottom":"-2rem","bottom":0},1000,"Infinity"); */
		$(".down").css({"right":"-40rem"}).show().animate({"right":"20rem"}, 400, "swing", function(){
			$(".up").css({"right":"-40rem"}).show().animate({"right":"20rem"}, 500, "swing");
		});
	});
}

function twoSkill() {
	$(".skilltxt").stop().show(1200);
	$(".bars").stop().show().delay(1400).animate({"width":"70%"},700, "swing",function(){
		$(".bar").stop().animate({"width":"100%"}, 500, "swing", function(){
			$(this).animate({"width":$(this).data("percent")+"%"}, $(this).data("duration"), "swing");
		});
	});
}

function twoBox() {
	$(".twobox").css({"left":"-20rem"});
	$(".twobox").show().animate({"left":"18.5rem"}, 1000, "swing");
}

function twoNumber() {
	$(".num").eq(0).css({"left":"-30rem"});
	$(".num").eq(0).show().animate({"left":"-5rem"}, 800, "swing")
}



var lsTop = 0;
$(window).scroll(function(){
	if($(".num").data("chk") == "1") {
		var numTop = $(".num").eq(0).offset().top;
		var scTop = $(this).scrollTop();
		var tarDn = "-36rem";
		var tarUp = "0";
		var textDn = "-47rem"
		if (scTop > lsTop){
			if(scTop > numTop) {
				$(".num").eq(0).stop().animate({"bottom":tarDn}, 1000, "swing");
				$(".twobox").stop().animate({"bottom":textDn}, 1000, "swing");
			}
		} 
		else {
			if(scTop < numTop - 490) {
				$(".num").eq(0).stop().animate({"bottom":tarUp}, 1000, "swing");
				$(".twobox").stop().animate({"bottom":"-11rem"}, 1000, "swing");
			}
		}
		lsTop = scTop;
	}
}).trigger("scroll");


function threeCir(){
	$(".print").stop().delay(5000).animate({"width":"350px","height":"350px"}, 500, "swing");
	$(".digital").stop().delay(5000).animate({"width":"350px","height":"350px"}, 500, "swing");
}