	var data=["小萝莉的萌神大叔","javascript","java","MySql数据库","微信","QQ","说说","电影","个人博客","扫码支付"];
	var num=0;
	function create(){
		$("a").remove();
		$(".main").append($('<a href="" title=""></a>'));
		$("a").html(data[random(10)]);
		$("a").css({
			"position":"absolute",
			"bottom":num+"px"
		})
		num+=3;
		if(num>213){
			$("a").css("opacity",0.5)
		}else if(num>220){
			$("a").css("opacity",0.3)
		}else if(num>226){
			$("a").css("opacity",0);
			$("a").remove();
		}
		console.log($("a").html())
	}
	// setInterval(function(){
	// 	create()
	// },1000)
	function random(min){
		return Math.floor(Math.random()*min);
	}
	console.log(random(10));