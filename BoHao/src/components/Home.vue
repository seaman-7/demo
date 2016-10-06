<template>
  <div class="hello">
    <!-- <img class="banner" :src="banner" alt="jpg" height="500px" width="100%"> -->
   <!--  <img class="banner" src="../assets/images/banner/banner01.png" alt="jpg" width="100%">
    <img class="banner_01 img-responsive" src="../assets/images/banner/banner_01.png">
    <div class="banner_title">
      <h1>让一切尽现眼前...</h1>
    </div> -->

    <div class=" banner_bg1">
    <img class="banner_01 " src="../assets/images/banner/banner_01.png">
    <h1 class="banner_title">让一切尽现眼前...</h1>  
    </div>
    <div class="ban_bor"></div>

    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">智能大厦 <span class="text-muted">- Intelligent Building.</span></h2>
          <p class="lead">网络布线、视频监控、音响系统、一卡通系统.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="http://test.photo0086.com/new/Upload/Large/2013/0703/635084498455291250.jpg" alt="Generic placeholder image">
        </div>
      </div>


      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">智能交通 <span class="text-muted">- Intelligent Transportation.</span></h2>
          <p class="lead">电子警察系统、交通标志标牌、路面标志线.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" src="http://news.c-ps.net/uploads/allimg/141105/18-1411051601040-L.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">智能小区 <span class="text-muted">- Intelligent Community.</span></h2>
          <p class="lead">小区监控、音响广播、楼宇对讲、停车道闸.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="http://www.cn-110.com/edit/UploadFile/201011174242620.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">智能办公 <span class="text-muted">- Intelligent Office.</span></h2>
          <p class="lead">OA系统、机房建设、LED屏销售、电脑销售.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" src="http://img1.jc001.cn/img/546/1580546/1307/1351e5f9212e090.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">环境监测 <span class="text-muted">- Environmental Monitoring.</span></h2>
          <p class="lead">坝体监控、水面监控、雨量在线监测.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="http://img65.gkzhan.com/9/20151009/635800040338805171613.jpg" alt="Generic placeholder image">
        </div>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // banner:'http://eshop.htc.com/wcsstore/Aurora/new2014/img/Htc10_search.jpg',
      // banner:'http://eshop.htc.com/wcsstore/Aurora/new2014/img/Htc10_search.jpg',
      // msg: 'Hello Home!',
    }
  },
  ready(){
      // $(".banner_01").hover(function(){
        // $(".banner_01").toggle()
        // top: '350px',
        // opacity:'1',
        // transition: '2s',
      // })
      // })
      $(".banner_01").animate({
        top: '120px',
        opacity:'.8',
        transition: '2s',

      })
      $(".banner_title").animate({
        top: '380px',
        opacity:'1',
        transition: '2s',

      })
  }
}
</script>

<!-- Add "scoped" -->
<style>
.banner_bg1{
  background:url('../assets/images/banner/banner01.png') center left no-repeat #000;
  /*background-size:100% 99%;*/
  /*padding:277px;*/
  height: 550px;
  margin-top: -20px;
}
.banner_01{
  position: absolute;
  /*position: relative;*/
  opacity: 0;
  top: 220px;
  /*padding-right:50px; */
  right: 8%;
  /*width:100px;*/
  /*height: 100px;*/
  /*top: 200px;*/
  /*top: 20%;*/
  /*right: 1%;*/
  /*right: 20px;*/
}
.banner_title{
    /*position: absolute;*/
    position: relative;
    /*margin-top: 10px;*/
    display: inline-block;
    top: 480px;
    left: 11%;
  /*margin-right: 1000px;*/
    /*border-radius: 5px;*/
  /*opacity: 0;*/

  /*left: 10%;*/
  /*right: 66%;*/
  /*display: inline-block;*/
  /*top: 550px;*/
  padding: 10px 30px;
  /*border: 2px solid #fff;*/
  color: #fff!important;
}
/*.banner_subtitle{
  display: block;
  position: absolute;
  top: 200px;
  left: 38%;

  padding:10px 30px;
  border-radius: 8px;
  border: 2px solid #fff;
  color: #fff;
  transition: 1s!important;
  opacity: 0;
}
.banner_subtitle:hover{
  background: #222;
  border: 2px solid #fff;
  color: #fff;
  opacity: 0.8!important

}*/
</style>
