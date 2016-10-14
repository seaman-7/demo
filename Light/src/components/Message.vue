<template>
<!-- <div class="content"> -->
  <div class="message">
    <h2>留言板</h2>
    <p>评论、吐槽都在这，欢迎盖楼</p>
  </div>
  <!-- <span class="fresh" @click="myrefresh()">&加载不成功，点我试试...&</span> -->
  <span @click="reload()" class="icon icon-refresh"></span>
  <!-- <p id="c"><a @click="reload()" class="button button-light">点我刷新</a></p> -->
	<div class="ds-thread" data-thread-key="message" data-title="vue_jd&message" data-url="http://seaman-7.github.io/message"></div>
	</div>
</template>


<style>
/*<!-- <style scoped> -->*/
.icon-refresh{
	position: absolute;
	bottom: 20px;
	right: 20px;
}
.icon-refresh:hover{
	transition: 1s;
	-moz-transform:rotate(720deg);
	-webkit-transform:rotate(720deg);
	filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.message{
	text-align:center;
	background: url("http://ww4.sinaimg.cn/large/0060lm7Tgw1f8rlzbboigj30zk0k0dgq.jpg");
	background-size:cover;
	color: #fff;
	width: 100%;
	height: 5em;
}
.message h2{
	margin: 0;
	padding-top: 0.3em;
}
.message p{
	font-size: 0.7em;
}
.fresh{
	display: block;
	width: 100%;
	background: #1c2023;
	color: #998;
	text-align: center;
}
</style>
<script type="text/javascript">
		var duoshuoQuery = {short_name:"jgsdx"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
export default({
	methods:{
		// myrefresh(){ 
			// window.location.reload(); 
			// } 
			reload(){
				window.location.reload()
			}
	}
})



	</script>
<!-- 多说公共JS代码 end -->
复制
