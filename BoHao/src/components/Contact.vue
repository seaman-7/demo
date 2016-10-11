<template>
  <div class="hello">
    <!-- <img class="banner" src="../assets/images/banner/4.jpg" alt="jpg" width="100%"> -->

    <div class="banner_bg banner_bg5">
      <h1 class="banner_bg_t">微笑服务，客户至上</h1> 
    </div>
    <div class="ban_bor"></div>

    <div class="container">
      <h2 class="subtitle">{{ msg }}</h2>
      <hr>

      <div class="col-md-4 center-block text-center con_item con_item_1">
        <h3>电话服务</h3>
        <img src="../assets/images/contact/1.png" class="center-block" >
        <span class="con_num">123-4567-8999</span>
        <p>如果有任何问题、意见请电话联系我们的客服</p>
      </div>
      <div class="col-md-4 center-block text-center con_item">
        <h3>网上服务</h3>
        <img src="../assets/images/contact/6.png" class="center-block">
        <!-- 从static文件夹读取失败 -->
        <!-- <img src="../static/images/contact/6.png" class="center-block"> -->

        <a target="_blank" title="售前 : 2559083201" href="http://wpa.qq.com/msgrd?v=3&uin=2559083201&site=qq&menu=yes"><button type="button" class="btn btn-info">点击质询售前服务</button></a>
        <a target="_blank" title="售后 : 2559083201" href="http://wpa.qq.com/msgrd?v=3&uin=2559083201&site=qq&menu=yes"><button type="button" class="btn btn-info">点击质询售后服务</button></a>
        <br>
        <br>



        <p>电子邮箱:xxxxxxxxx@163.com</p>
        <p>　　如需涉及图片、视频等多媒体类可通过以上方式咨询客服</p>

      </div>
      <div class="col-md-4 center-block text-center con_item">
        <h3>上门服务</h3>
        <img src="../assets/images/contact/11.png" class="center-block">
        <!-- <img src="../static/contact/11.png" class="center-block"> -->
        <p>　　根据约定或必要时，我们的销售人员、客服人员或技术工程师也可以及时上门具体咨询，实地勘察，现场规划解决方案，以为您进行提供更细致周到的服务</p>
        <br>
        <br>

        <br>
      </div>

      <div class="">
        <span class="con_arsName">江西 · 吉安</span>

        <div class="con_map">
          <div class="con_ars col-md-4">
            <h3>公司地址</h3>
            <p class="con_arsItem">江西省吉安市吉州区井冈山大道摩比对面</p>
            <p class="con_arsItem">xxxxxxxxx@163.com</p>
            <p class="con_arsItem">邮编 : 343000</p>
          </div>
          <!-- <iframe src="../assets/images/map.html" class="con_bdMap col-md-8"> -->
          <iframe src="./static/map.html" class="con_bdMap col-md-8">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banner:'http://eshop.htc.com/wcsstore/Aurora/new2014/img/ksxr.jpg',
        msg: 'CONTACT US(联系我们)',
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
      // $(".banner_01").animate({
      //   top: '80px',
      //   opacity:'0.6',
      //   transition: '2s',

      // })
      $(".banner_bg_t").animate({
        top: '50px',
        opacity:'1',
      })
  }
  }
</script>

<!-- Add "scoped" -->
<style scoped>
.banner_bg5{
  background:url('http://t.cn/RVGiWJ6') no-repeat #b7c1c3;
  /*background-size:100% 99%;*/
  
}
/*  .banner_bg{
  background-size:100% 99%;
  margin-top: -20px;
  text-align: center;
  padding:100px 0 240px;
  color: #fff;
  }*/
.con_bdMap{
  padding-right: 0px;
  float: right;
  width: 720px;
  height: 450px;
  border: none;
}
.con_arsItem{
  padding: 10px;
  margin: 30px 0;
  background: #eee
}
.con_map{
  border-top:2px solid #9d9d9d 
}
  .con_arsName{
    font-size: 36px;
    clear: both;
    display: inline-block;
    padding: 10px 30px;
    /*margin: 5px 0;*/
    background: #31b0d5;
    color: #fff;
  }
  .con_item{
    line-height: 2em;
    border-left: 1px #eee solid
  }
  .con_item_1{
    border:none;
  }
  .con_item img{
    padding:20px;
  }
  .con_num{
    font-size: 3rem;
    font-weight: bold;
  }
</style>
