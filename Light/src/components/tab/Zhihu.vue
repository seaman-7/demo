<template>
  <div class="content">
  <div id="listId">
    <div class="content-block-title">知乎日报</div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:[
        {
          name:"日常心理学",
          src:"../static/zh/Psychology.html"
        },
        {
          name:"用户推荐日报",
          src:"../static/zh/Recinnebded.html"
        },
        {
          name:"电影日报",
          src:"../static/zh/Movie.html"
        },
        {
          name:"不许无聊",
          src:"../static/zh/Noboring.html"
        },
        {
          name:"设计日报",
          src:"../static/zh/Design.html"
        },
        {
          name:"大公司日报",
          src:"../static/zh/Bigcompanies.html"
        },
        {
          name:"财经日报",
          src:"../static/zh/Game.html"
        },
        {
          name:"互联网安全",
          src:"../static/zh/Safe.html"
        },
        {
          name:"开始游戏",
          src:"../static/zh/Game.html"
        },
        {
          name:"音乐日报",
          src:"../static/zh/Music.html"
        },
        {
          name:"动漫日报",
          src:"../static/zh/Comic.html"
        },
        {
          name:"体育日报",
          src:"../static/zh/Sports.html"
        },
        {
          name:"职人介绍所",
          src:"../static/zh/Jobintroduction.html"
        },
        {
          name:"24 小时热门",
          src:"../static/zh/Hot_24.html"
        },
        {
          name:"小事",
          src:"../static/zh/Trivial.html"
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

</style>

