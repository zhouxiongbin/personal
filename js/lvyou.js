function Lvyou() {
        this.init();
    }
    Lvyou.prototype = {
        init: function () {
            this.lock=true;
            this.together = new Date();
            this.together.setFullYear(2018, 8, 18);
            this.together.setHours(20);
            this.together.setMinutes(0);
            this.together.setSeconds(0);
            this.together.setMilliseconds(0);
            this.event();
            this.timeElapse(this.together);
            this.active();
            this.water();
        },
        event: function () {
             $(document).on("scroll",function(){
             if($(document).scrollTop()>10){
              $("nav").addClass("top");
              $("nav ul>li a").css("padding","0 10px");
              $("p.demo").css("font-size","22px");
             }else{
               $("nav").removeClass("top");
               $("nav ul>li a").css("padding","0 14px");
               $("p.demo").css("font-size","25px");
             }
          })
        $(".search").on("click",function(){
           if(this.lock){
            $("#search").addClass("ser");
            $("#search").removeClass("hide");
            this.lock=false;
          }else{
            $("#search").addClass("hide");
            $("#search").removeClass("ser");
            this.lock=true;
           }
          })
         // 登录密码
        $(".header_auto a").on("click",function(){
            $("#mask").toggle();
        })
        // 密码逻辑
        $("#submit").on("click",function(){
            if($('#username').val()==""){
             $("#mask").css("display","none");
            }else{
             localStorage.name=$('#username').val();
             console.log(localStorage.name)
             $("#mask").css("display","none");
             $(".header_auto a").html(localStorage.name);
            }
        })
        $("#mask h2 a").on("mouseenter",function(){
            console.log($(this).index())
            $(".login-tab div").css("display","none");
            $(".login-tab div").eq($(this).index()).css("display","block");
            $("#mask h2 a").css({
                "paddingBottom":"0px",
                "background":"#f1f1f1"
            })
            $(this).css({
                "paddingBottom":"11px",
                "background":"white"
            })
        })
        },
        timeElapse:function(date){
            var current = Date();
            var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
            var days = Math.floor(seconds / (3600 * 24));
            seconds = seconds % (3600 * 24);
            var hours = Math.floor(seconds / 3600);
            if (hours < 10) {
                hours = "0" + hours;
            }
            seconds = seconds % 3600;
            var minutes = Math.floor(seconds / 60);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            seconds = seconds % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var result = "<span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒"; 
            $("#sp").html(result);
        },
        active: function () {
            this.timer = setInterval(() => {
                this.timeElapse(this.together)
            },500)
        },
        water:function(){
            var Json=[
                "2017-8-24，今天更新了以前写的微信支付",
                "2017-8-25，今天更新了以前写的微信支付",
                "2017-8-26，今天更新了以前写的微信支付",
                "2017-8-27，今天更新了以前写的微信支付",
                "2017-8-28，今天更新了以前写的微信支付",
                "2017-8-29，今天更新了以前写的微信支付",
            ]
            for (var i = 0; i <6; i++) {
               $(".water ul").append('<li><a href=""></a></li>');
               $(".water ul li a").eq(i).html(Json[i]);
            };
        }
    }
   new Lvyou();
  