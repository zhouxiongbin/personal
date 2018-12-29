$.get("lib/index.json",function(data){
			var dataobj = typeof data=='object'?data:eval("("+data+")");
			var dataArry = dataobj.data;

			for(var i = 0;i<dataArry.length;i++){
				var img = dataArry[i].img;
				console.log(img)
				var h4 = dataArry[i].h4;
				var p = dataArry[i].p;
				var time = dataArry[i].time;
				var m1 = dataArry[i].m1;
				var m2 = dataArry[i].m2;
				var m3 = dataArry[i].m3;
				$.post("http://127.0.0.1/个人网站/php/insert.php",{
					img:img,
					h4:h4,
					p:p,
					time:time,
					m1:m1,
					m2:m2,
					m3:m3
				},function(data){
					console.log(data);
				})
			}
		})