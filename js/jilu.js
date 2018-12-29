$.get("lib/r.json",function(data){
//				 console.log(data);
		var templateString = $("#template").html();
		var data=typeof data=="object"?data:eval("("+data+")")
		var dataArry = data.data;
		for (var i = 0; i < dataArry.length; i++) {
			var DomSting = templateFn(templateString,dataArry[i]);
     		$(".jilu").append(DomSting);
		};
	})
		function templateFn(templateString,data){
       		return templateString.replace(/\@([a-z0-9]+)\@/g,function(match,$1,index,string){
          		return data[$1];
       		});
		}