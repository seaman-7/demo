<template>
<div class="content">
  <div class="infor b01">
    <a v-link="{name:'school'}"><i>The School</a>
  </div>
  <div class="infor b02" >
    <a  @click="jj()"><i>The World</a>
  </div>
  <div class="infor b03">
    <a href="http://gotit.asia/cet"><i>CET - 4 / 6</a>
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
.b01{
  background: #d44c42
}
.b02{
  background: #4caf50
}
.b03{
  background: #00bcd4
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