var banner = new Slider($(".slides"), {
	type: "normal",
	delay: 1500,
	speed: 300
}); 

$(".portfoilio").click(function(){
	$(".port_menus").slideToggle();
})

var menuImg = [];
var menuSrc = [];
$(".port_menu").each(function(i){
	var src = $(this).data("src");
	menuSrc[i] = src;
	menuImg[i] = new Image(src);
});

$(".port_menu").mouseover(function(){
	var n = $(this).index();
	$(".port_menus").css("background-image", "url("+menuSrc[n]+")");
});