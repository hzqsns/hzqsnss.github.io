const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
//const live2d_path = "./";

$("<link>").attr({href: D:\Blog\AzureBlog\source\live2d-widget\waifu.css, rel: "stylesheet", type: "text/css"}).appendTo("head");
//waifu.css的绝对路径

$.ajax({
	url: D:\Blog\AzureBlog\source\live2d-widget\live2d.min.js,
	dataType: "script",
	cache: true,
	async: false
});
//live2d.min.js的绝对路径

$.ajax({
	url: D:\Blog\AzureBlog\source\live2d-widget\waifu-tips.js,
	dataType: "script",
	cache: true,
	async: false
});
//waifu-tips.js的绝对路径

//初始化看板娘，会自动加载指定目录下的waifu-tips.json
$(window).on("load", function() {
	initWidget(D:\Blog\AzureBlog\source\live2d-widget\waifu-tips.json, "https://live2d.fghrsh.net/demo/1.4.2/");
});
//initWidget第一个参数为waifu-tips.json的绝对路径
//第二个参数为api地址（无需修改）
//api后端可自行搭建，参考https://github.com/fghrsh/live2d_api