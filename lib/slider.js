MVC
.addModel('slider', {
	data: [
		{
			"icon": "img/icon_1.jpg",
			"iconTitle": "萌主页",
			"title": "当女孩遇到熊",
			"content": "深山里有萝莉出没"
		},
		{
			"icon": "img/icon_1.jpg",
			"iconTitle": "动漫",
			"title": "会说话的汤姆猫",
			"content": "汤姆猫给你讲故事"
		},
		{
			"icon": "img/icon_1.jpg",
			"iconTitle": "LOL直播",
			"title": "中单蚂蚱输出爆炸",
			"content": "JY解说"
		},
		{
			"icon": "img/icon_1.jpg",
			"iconTitle": "景点门票",
			"title": "厦门方特梦幻王国",
			"content": "跟着跑男一起狂欢"
		},
		{
			"icon": "img/icon_1.jpg",
			"iconTitle": "hao到家",
			"title": "美食送到家",
			"content": "吃货福音私人订制"
		}
	]
})
.addView('slider', function (model, template) {
	// 定义步定义容器
	var dom = $('<div id="slider" class="slider"></div>');
	// 获取数据
	// var data = MVC.Model.get('slider')
	var d = model.get('slider')
	// 定义模板
	var tpl = [
		'<div class="container"><ul>{#list#}</ul></div>',
	].join('')	// 这是个数组，我们需要的是字符串，所以调用jion方法
	var liTpl = [
		'<li>',
			'<div class="tu"><img src="{#icon#}" alt="" /></div>',
			'<div class="font">',
				'<h4>{#iconTitle#}</h4>',
				'<p>{#title#}</p>',
				'<a href="">{#content#}</a>',
			'</div>',
		'</li>'
	].join('');
	// 定义模板字符串
	var html = liHtml = '';
	// 格式化模板
	for (var i = 0; i < d.data.length; i++) {
		liHtml += template(liTpl, d.data[i])
	}
	html = template(tpl, {
		list: liHtml
	});
	// 插入页面中
	dom.html(html)
	dom.appendTo($("#side2"));
	return dom;
})
.addCtrl('slider', function (model, view) {
	var dom = view.create('slider');
	// 添加箭头按钮的交互
	dom.delegate('.arrow', 'click', function () {
		// 当按钮有close，说明现在是关闭状态，此时点击，就要显示容器，并将按钮的close类取消掉
		if ($(this).hasClass('close')) {
			// 取消close类
			$(this).removeClass('close');
			// 将容器显示出来
			dom.find('.container').animate({marginLeft: 0}, 200)
		// 否则按钮没有close类， 说明现在是打开状态，此时点击，就要关闭容器，并添加按钮的close类
		} else {
			$(this).addClass('close');
			dom.find('.container').animate({marginLeft: -50}, 200)
		}
	})
})