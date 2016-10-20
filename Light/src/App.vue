<template>
	<div :class="{'theme-dark':isN}">
		<div class="page page-current">
			<header class="bar bar-nav">
				<a class="button button-link button-nav pull-left close-panel" @click="gohistory()" data-transition='slide-out'>
					<span class="icon icon-left"></span>
				</a>
				<a class="button button-link button-nav pull-right open-panel"  data-transition='slide-out'>
					<span class="icon icon-menu"></span>
				</a>
				<h1 class="title close-panel">{{$route.name}}</h1>
			</header>

			<nav class="bar bar-tab close-panel">
				<a class="tab-item active" v-link="{name:'home',activeClass:'active'}">
					<span class="icon icon-home"></span>
					<span class="tab-label">首页</span>
				</a>
				<a class="tab-item" v-link="{name:'information',activeClass:'active'}">
					<span class="icon icon-browser"></span>
					<span class="tab-label">资讯</span>
				</a>
				<a class="tab-item" v-link="{name:'knowledge',activeClass:'active'}">
					<span class="icon icon-star"></span>
					<span class="tab-label">涨知识</span>
				</a>
				<!-- reload()刷新界面获取评论 -->
				<a class="tab-item" v-link="{name:'message',activeClass:'active'}">
					<span class="icon icon-message"></span>
					<span class="tab-label">留言板</span>
				</a>
			</nav>

			<div class="content close-panel">
				<router-view keep-alive></router-view>
			</div>
		</div>
		<!-- <div class="panel-overlay"></div> -->
		<div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo'>
			<div class="content-block side_bar">
				<p>关于</p>
				<hr>
				<p>By vue.js（1.0）and sui - webapp</p>
				<p>源码地址</p>
				<p><a href='https://github.com/seaman-7/light'>https://github.com/seaman-7/light</a></p>
				<p>反馈意见，一起学习</p>
				<img :src="wechatImg" class="sub_wechat" alt="wechat">
				<div class="row">
					<span class="col-33">版本号 : </span> <span class="pull-right"> 1.01 beat </span>
				</div>
				<div class="row">
					<span class="col-40">夜间模式 :</span>
					<label class="label-switch pull-right">
					    <!-- 点击触发事件应绑定在checkbox 上而非 input -->
						<input type="checkbox">
						<div @click="nigthMode()" class="checkbox"></div>
					</label>
				</div>
				</div>
			</div>

		</div>
	</template>

	<style>
		body { 
			font-family:  "微软雅黑",Source Sans Pro,Helvetica, sans-serif;
		}
		.side_bar{
			font-size: 0.9em;
			text-align:center;
			line-height: 1.8em;
			margin: 0!important
		}
		.close{
			padding: 10px 15px
		}
		.sub_wechat{
			margin-bottom: 9em
		}
		
	</style>

	<script>
		export default({
			data(){
				return{
					wechatImg:"http://ww4.sinaimg.cn/large/0060lm7Tgw1f8wp70tlecj305k05kdg0.jpg",
					// wechatImg:"./static/wechat.gif"
					isN:false,
				}
			},
			methods:{
				gohistory() {
					window.history.back()
				},
				nigthMode() {
					let isN
					this.isN = !this.isN
					if(this.isN === true){
					console.log("夜间模式已开启")
					}
					else{
					console.log("夜间模式已关闭")
					}
				},
				reload(){
						window.location.reload()
				}
			}
		})
	</script>