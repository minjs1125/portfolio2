var Slider = (function () {
    function Slider(_wrap, _option) {
        this.slides = _wrap;
        this.slide = $(".slide", this.slides);
        this.cnt = this.slide.length;
        this.wid = $(this.slide[0]).width();
        this.now = 0;

        if (_option) this.option = _option;
        else {
            this.option = {
                type: "normal",
                delay: 2000,
                speed: 300
            }
        }
        switch (this.option.type) {
            case "pingpong":
                this.direction = 1;
                this.initPingpong();
                break;
            case "infinite":
                this.initInfinite();
                break;
            case "nomal":
                this.initSlide();
                break;
            default:
                this.initSlide();
                break;
        }
    };

    Slider.prototype.initSlide = function () {
        for (i = 0; i < this.cnt; i++) {
            $(this.slide[i]).css({
                "left": (this.wid * i) + "px"
            });
        }
        this.slideNomal();
    };

    Slider.prototype.slideNomal = function(){
        var ori = this;
        $(this.slides).delay(this.option.delay).animate({"left":-(this.wid*this.now)+"px"},this.option.speed,function(){
            if(ori.now == ori.cnt - 1) ori.now = 0;
            else ori.now++;
            ori.slideNomal();
        });
    };
    return Slider;
}())