<template>
  <div class="hello">
    <!-- <img class="banner" src="../assets/images/banner/9.png" alt="jpg" width="100%"> -->
    <!-- <img class="banner_01 img-responsive" src="../assets/images/banner/banner_01.png"> -->
    <!-- <div class="banner_subtitle">
      <h1>尖端技术，立足长远</h1>
    </div> -->

    <div class="banner_bg banner_bg3">
    <h1 class="banner_bg_t">尖端技术，立足长远</h1>  
    </div>
    <div class="ban_bor"></div>

  <!-- <img class="banner" :src="banner" alt="jpg" height="500px" width="100%"> -->
  <div class="container">
    <h2 class="subtitle">{{ msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'TECHNICAL SUPPORT(技术支持)',
      banner:'http://eshop.htc.com/wcsstore/Aurora/new2014/img/romCommunity.jpg',

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
.banner_bg3{
  background:url('http://t.cn/RVGiNCa') #252525;
  background-size:100% 99%;
  
}
</style>
