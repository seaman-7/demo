<template>
<div class="content">
  <div class="infor b04">
    <a v-link="{name:'zhihu'}"><i>Zhihu</a>
  </div>
  <div class="infor b05" >
    <a  @click="jj()"><i>Douban</a>
  </div>
  <div class="infor b06" >
    <a  @click="jj()"><i>Others</a>
  </div>
</div>
</template>

<script>
export default({
  methods:{
    jj() {
      // $.showIndicator();
      // setTimeout(function () {
      //     $.hideIndicator();
      // }, 2000);
      $.toast('项目维护中...', 2345, 'tips')
  }
}
})

</script>

<style>
/*<!-- <style scoped> -->*/
.tips{
  position: fixed;
  top:29rem;
}
.infor{
  width:100%;
  height: 10em;
  text-align: center;
  border: 1px #fff solid;
}
.b04{
  background: #2196f3
}
.b05{
  background: #228a31
}
.b06{
  background: #ff9800
}
.infor a{
  line-height: 10em;
  border:2px #fff solid;
  border-radius: 2em;
  padding:0.6em 1.5em;
  color: #fff;
  /*opacity:0.6;*/
}
.infor a:hover{
  background: #fff;
  color: #000;
  font-weight: bold;
}
</style>