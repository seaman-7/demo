<template>
<div>
<header class="navbar-wrapper">
<!-- 加container属性：导航栏增高 -->
  <div class="nav_bar">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed nav_but" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="logo">
          <a class="navbar" href="#"><img src="./assets/logo.png"></a>
          </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right nav_ul">
            <li v-link="{name:'home',activeClass:'active'}"><a class="xx">&nbsp;&nbsp;首 页&nbsp;&nbsp;</a></li>
            <li v-link="{name:'collaborate',activeClass:'active'}"><a class="xx">工程项目</a></li>
            <li v-link="{name:'support',activeClass:'active'}"><a>技术支持</a></li>
            <li v-link="{name:'intro',activeClass:'active'}"><a>公司简介</a></li>
            <li v-link="{name:'contact',activeClass:'active'}"><a>联系我们</a></li>
          </ul>
        </div>
      </div><!-- 
      <img :src="hengfu" alt="jpg" height="500px" width="100%"> -->
    </nav>
  </div>
</header>

<router-view :is="view"
  transition="fade"
  transition-mode="out-in"></router-view>

<footer>
<div class="container">
  <div class="row ft_wrap">
    <div class="col-sm-3 ">
      <h4 class="ft_head">关于我们</h4>
      <br>
      <a v-link="{name:'intro'}" class="ft_text">公司简介</a><br>
      <a v-link="{name:'home'}" class="ft_text">公司职能</a>
    </div>
    <div class="col-sm-3 ">
      <h4 class="ft_head">项目相关</h4>
      <br>
      <a v-link="{name:'collaborate'}" class="ft_text">项目工程</a><br>
      <a v-link="{name:'support'}" class="ft_text">技术支持</a>
    </div>
    <div class="col-sm-3 ">
      <h4 class="ft_head">联系我们</h4>
      <br>
      <span class="ft_text">xxx-xxx-xxxx</span><br>
      <a class="ft_text" href="mailto:xxxxxx@163.com">xxxxxx@163.com</a><br>
      <span class="ft_text">江西省-吉安市-吉州工业园</span>
    </div>
    <div class="col-sm-3 ">
     <div class="logo">
          <!-- <a href="#"><img src="https://www.lawyered.in/static/commonimages/logo.c814dfa7c85d.png"></a> -->
          <a href="#"><img src="./assets/logo.png"></a>
          </div><br>
      <span class="ft_text" >Copyright 2016 江西博浩科技发展有限公司。著作权所有，并保留一切权利。</span><br>
      <span class="ft_text" >&copy;2016 赣ICP备xxxxxx号-x</span><br> 
    </div>
  </div>
  </div>
</footer>
</div>
</template>


<script>
  export default {
    
    // data(){
      // hengfu:hengfu
      // msg:'msg'
    // }
  
  ready() {
    // var isIosFlatform = function() {
//     return navigator.userAgent.match(/(iPad|iPhone)/) ? !0 : !1
// };
// var isAndroidFlatform = function() {
//     return navigator.userAgent.match(/(Android)/) ? !0 : !1
// };
// var isMobile = function() {
//     return isIosFlatform() || isAndroidFlatform() ? !0 : !1
// };
// if (!isMobile()) {
//     window.location.href = "http://www.baidu.com/"
// }
    // $(".xx").click(function(){
    //   alert("1")
    // }),
    // $(".xx").click(function(){
    //   console.log("con_ars")
    //   $('.navbar-toggle').click()
    // })

//手机端点击导航链接时自动收回（切换链接不跳转才需要）
    $(".nav > li > a").click(function(){  
      $('#collapse').addClass("collapsed");  
      $('#collapse').attr("aria-expanded",false);  
      $("#navbar").removeClass("in");  
      $("#navbar").attr("aria-expanded",false);  
});  
  }
}
</script>

<style>
.fade-transition {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave {
  opacity: 0.85;
}
body{
  /*微软雅黑--> \\5FAE\8F6F\96C5\9ED1*/
  font-family: "微软雅黑","Arial"!important;
  /*font-size: 1.6rem;*/
}
h2.subtitle:first-letter{
padding: 6px;
font-size: 64pt;
}
.nav_bar{
  width: 100%;
  background-color: #252525;
  font-size: 1.6rem;
  /*padding: 0*/
}
.navbar-header .logo{
  /*margin-right: 100px;*/
  margin-left: 15px;
}
.logo img{
  width: 120px;
}
.nav_ul{
  /*position: relative;*/
  font-weight: bolder;
}
/*.nav_ul li{
  padding-bottom: 10px;
  margin: 15px 8px 0px;
}
.nav_ul li:hover{
  border-bottom:5px #0aa solid;
  color:#fff;
  transition: 0.2s
}*/
.nav_ul li a{
  color: #fff;
  background: #222222!important;
  padding: 25px 15px;
  margin: 9px 10px 0;
  cursor: pointer;
}
.nav_ul li a:hover{
  border-bottom:5px #0aa solid;
  transition: 0.2s
}
.nav_ul li a{
}
.nav_but{
  margin-top:25px ;
}
/*.ft_main{
  width: 100%;
    padding:0;
}*/
footer{
  background-color: #252525;
  margin-top: 10%;
  height: 90%;
  padding-top: 3%;
  padding-bottom: 3%;
}
.col-sm-3{
  padding: 0;
}
.ft_wrap{
  background: #252525;
  margin: 0 auto;

  /*font-weight: bold;*/
}
{
  /*float: left;*/
}
.ft_head{
  font-weight: 700;
  color: #02def4;
}
.ft_text,a.ft_text{
  color: #9d9d9d;
  line-height: 40px;
/*  height: 20px;*/
  text-decoration: none;

  font-weight: bold
  
}
a.ft_text:hover{
  text-decoration: underline;
  /*color: #0aa!important;*/
  /*transition:1s;*/
  /*font-weight: bold;*/
}

</style>
