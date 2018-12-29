function Data(){
	this.p = 1;
	
	this.longs=8;
	this.page=1;
	this.init();
	this.bindEvent();
}
Data.prototype = {
	init:function(){
		var self = this;
		$.get("http://127.0.0.1/个人网站/php/select.php",{page:this.page,longs:this.longs},function(data){
			// console.log(data);
			self.yonghu(data);
		})
	},
	yonghu:function(data){
		// console.log(data);
		var dataObj = typeof data=='object'?data:eval("("+data+")");
		var dataArr = dataObj.data;
		// console.log(dataObj);
		// console.log(dataArr);
		var templateString = $("#template").html();
		$(".list").html(" ");
		for(var i = 0;i<dataArr.length;i++){
			var DomString = templateFn(templateString,dataArr[i]);
			$(".list").append(DomString);
			$(".content").css("margin-bottom","6%");
			$(".username").html("周...");
			// $(".finally").html("...");
		}
		function templateFn(templateString,data){
			return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
				return data[$1];
			});
		}
	},
	bindEvent:function () {
        var self = this;
        $(".prev").on("click",function () {
            self.page--;
            if (self.page<1) {
                self.page = 1;
            }
            self.init();
            // $.post("http://127.0.0.1/个人网站/php/find.php",{
            //     "P":self.p
            // },function(data){
            //     self.yonghu(data);
            //     console.log(data)
            // })
        })
        $(".next").on("click",function () {
            self.page++;
            self.init();
            // $.post("http://127.0.0.1/个人网站/php/find.php",{
            //     "P":self.p
            // },function(data){
            //     self.yonghu(data);
            // })
        })
    }
}