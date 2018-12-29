            const canvas = $('canvas')[0];
            canvas.width = 900;
            canvas.height = 600;
            // canvas.style.border = '1px solid #000';
            const context = canvas.getContext('2d');
            var data=["小萝莉的萌神大叔","javascript","java","MySql数据库","微信","QQ","说说","电影","个人博客","扫码支付"];
            // 创建小方块
            function Rect(obj) {
                this.init(obj);
            }
            function numFn(min,max){
                return Math.floor(Math.random()*(max-min)+min);
            }
            Rect.prototype = {
                init: function (obj) {
                    this.x = obj.x || 0;
                    this.y = obj.y || 550;
                    this.z = obj.z || 0;
                    this.n = obj.n || 0;
                    this.c = obj.c;
                },
                draw: function () {
                    context.beginPath();
                    context.font="40px bold 宋体";
                    context.textAlign="center";
                    context.textBaseline="bottom";
                    context.fillStyle=this.c;
                    context.fillText(data[this.z],this.x, this.y)
                    // context.fillRect(this.x, this.y, 25 * this.n, 25);
                    context.closePath();
                }
            }

            // 创建障碍物
            function Barrier() {
                this.init();
            }
            Barrier.prototype = {
                init: function () {
                    this.array = [];
                    const rect = new Rect({
                        x: this.random(0, 775),
                        n: this.random(2, 5),
                        z: this.random(0, 9),
                        c: this.ColorFn()
                    });
                    this.array.push(rect);
                },
                draw: function () {
                    for (let i = 0; i < this.array.length; i++) {
                        this.array[i].draw();
                    }
                },
                down: function () {
                    this.array.forEach(ele => {
                        ele.y--;
                        if (ele.y <0) {
                            // game.score.num++;
                        }
                    });
                    if (this.array[0].y % 100 == 0) {
                        const rect = new Rect({
                            x: this.random(0, 775),
                            n: this.random(3, 5),
                            z: this.random(0, 9),
                            c: this.ColorFn()
                        });
                        this.array.push(rect);
                    }
                },
                random: function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                },
                ColorFn:function(min,max){
                var r=numFn(0,200);
                var g=numFn(0,255);
                var b=numFn(0,200);
                return "rgb("+r+","+g+","+b+")";
                }
            }

            // 组建游戏
            function Game() {
                this.init();
            }
            Game.prototype = {
                init: function () {
                    this.barrier = new Barrier();
                    this.timer = null;
                    this.lock = true;
                    this.active();
                },
                active: function () {
                    this.timer = setInterval(() => {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        this.barrier.down();
                        this.barrier.draw();
                    }, 10)
                }
            }
        const game = new Game();
        // 滚动吸顶
      $(document).on("scroll",function(){
        // console.log($(document).scrollTop());
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
     console.log( $(".list .content"));
     $(".list").on("click",$(".content").eq(1),function(){
        console.log(111)
        window.location.href="movie.html";
     })
      // 搜索显示
      var lock=true;
    $(".search").on("click",function(){
       if(lock){
        $("#search").addClass("ser");
        $("#search").removeClass("hide");
        lock=false;
      }else{
        $("#search").addClass("hide");
        $("#search").removeClass("ser");
        lock=true;
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
    // $(document).on("click",function(e){
    //     if($("#mask").hasClass('active')){
    //         e.preventDefault();
    //     $("#mask").css("display","none");
    //     return false;
    //     }else{
    //         return false;
    //     }
        
    // })
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
    // 时间变化
    var together = new Date();
    together.setFullYear(2018, 8, 18);
    together.setHours(20);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);
    function timeElapse(date){
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
}

        timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 500);
    //流水式water
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
    