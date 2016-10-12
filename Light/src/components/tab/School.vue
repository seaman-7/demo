<template>
  <div class="content">
  <div id="listId">
    <div class="content-block-title">校园资讯</div>
     <div class="list-block media-list inset">
    <ul>
      <li v-for="item in items">
        <a @click="goif(item)" class="item-link item-content">
          <div class="item-inner">
              <div class="item-title">{{item.name}}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  </div>

  <iframe id="ifId" :src=""></iframe>
  <div class="content-block">
    <p><a href="http://gotit.asia/cet" class="button">四六级查询</a></p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:[
        {
          name:"新闻中心",
          src:"../static/jd/xwzx.html"
        },
        {
          name:"通知公告",
          src:"../static/jd/tzgg.html"
        },
        {
          name:"学术讲座",
          src:"../static/jd/xsjz.html"
        },
        {
          name:"学院动态",
          src:"../static/jd/xydt.html"
        },
        {
          name:"科研信息",
          src:"../static/jd/kyxx.html"
        },
        {
          name:"教务通知",
          src:"../static/jd/jwtz.html"
        },
      ]
    }
  },
  methods:{
    goif(i){
      document.getElementById("ifId").src = i.src
      document.getElementById('listId').style="display:none"
      document.getElementById('ifId').style="display:block"
    }
  }
}
</script>

<style>
/*<!-- <style scoped> -->*/
iframe{
  display: none;
	border:none;
	width: 100%;
	min-height: 30rem;
	overflow-y:hidden;
}


</style>