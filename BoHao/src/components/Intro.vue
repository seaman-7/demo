<template>
<div>
<!-- <img class="banner" :src="banner" alt="jpg" height="500px" width="100%"> -->

<!-- <img class="banner" src="../assets/images/banner/intro.jpg" alt="jpg" width="100%"> -->
<!-- <img class="banner" src="../assets/images/banner/23.png" alt="jpg" width="100%"> -->
<!-- <img class="banner_01 img-responsive" src="../assets/images/banner/banner_01.png"> -->
    <!-- <div class="banner_subtitle">
      <h1>精益求精是一种态度</h1>
    </div> -->

    <div class="banner_bg banner_bg4">
      <h1 class="banner_bg_t">精益求精是一种态度</h1> 
    </div>
    <div class="ban_bor"></div>

  <div class="container ito_wrap">

    <!-- <h1 class="text-center">博浩简介</h1> -->
    <h2 class="subtitle">{{ msg_intro }}</h2>
    <hr>
    <br>
    <p class="ito_idt">江西博浩科技发展有限公司成立于2013年；注册资金1118万元。公司前身吉安众舟科技发展有限公司，成立于2006年，因公司良性快速发展，现合并与江西博浩科技发展有限公司，并以成为吉安、江西智能产业领跑者。</p>
    <p class="ito_idt">博浩是一家集智能化建设、系统集成、智能交通、集安全防范产品研发、生产、销售、工程设计和设备维修于一体的大型专业性高科技公司。公司拥有一批多年从事本行业的高素质技术管理人才，一雄厚的经济实力和强大的技术力量为依托，凭借其科学的管理方法、强大的市场推广能力和优质完善的服务体系，成为<abbr title="此处为描述标记" class="initialism">MA</abbr>、<abbr title="此处为描述标记" class="initialism">SA</abbr>、<abbr title="此处为描述标记" class="initialism">FA</abbr>、<abbr title="此处为描述标记" class="initialism">IT</abbr> 业的一颗新星。</p>
    <p class="ito_idt">公司成立以来，得到客户的广泛好评与支持，同时自始自终坚持“诚信为本”、“服务第一”，在激烈的市场竞争中脱引而出，独树一帜；在服务上长期坚持“尖端技术、优质服务、立足长远”的宗旨。公司拥有先进的技术、优良的产品、全心全意和全面解决方案的能力。</p>
    <br>
    <br>
    <br>
<!--     <ul>
    <li class="lead">业务范围:</li>
    <p class="ito_idt">公司从事智能大厦、智能交通、标线、监控工程、网络布线、坝体在线监测等办公设备以及周边耗材的销售与服务；代理海康威视智能监控产品(安防产品国内第一品牌)，并提供本地化售前售后服务。</p>
    <li class="lead">企业理念:</li>
    <p class="ito_idt">诚信为本、质量第一、服务第一</p>
    <li class="lead">经营宗旨:</li>
    <p class="ito_idt">本着“诚信为本、质量第一、服务第一”的理念，以高标准的品质、经济合理的价格和优质完善的服务宗旨，博浩科技愿与社会各界同仁携手并进，共谋发展。我们将努力打造一支优良的团队，上至客户，下至同事，团结一致，一起创造将属于我们的辉煌！</p>
	</ul> -->
  <div v-for="item in items" class="col-md-4 center-block text-center intro_item">
    <img class="img-circle" :src="item.img" >
    <h3 class="lead">{{item.title}}</h3>
    <p class="">{{item.content}}</p>
  </div>

<!--   <div class="col-md-4 center-block text-center">
    <img class="img-circle" src="http://tse1.mm.bing.net/th?&id=OIP.M03ddb507e56bc682450255da1a1b449do0&w=300&h=300&c=0&pid=1.9&rs=0&p=0" >
    <h3 class="lead">企业理念:</h3>
    <p class="">诚信为本、质量第一、服务第一</p>
  </div>
  <div class="col-md-4 center-block text-center">
    <img class="img-circle" src="http://tse1.mm.bing.net/th?&id=OIP.M03ddb507e56bc682450255da1a1b449do0&w=300&h=300&c=0&pid=1.9&rs=0&p=0" >
    <h3 class="">经营宗旨:</h3>
    <p class="">本着“诚信为本、质量第一、服务第一”的理念，以高标准的品质、经济合理的价格和优质完善的服务宗旨，博浩科技愿与社会各界同仁携手并进，共谋发展。我们将努力打造一支优良的团队，上至客户，下至同事，团结一致，一起创造将属于我们的辉煌！</p>
  </div> -->
  <div>
    <h2 class="subtitle">{{ msg_documents }}</h2>
    <hr>
    <br>
    <img class="img-responsive" src="../assets/images/zj.jpg" alt="jpg">
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // banner:'http://eshop.htc.com/wcsstore/Aurora/new2014/img/Htc10_event.jpg',
      msg_intro:"COMPANY BRIEF(公司简介)",
      msg_documents:"COMPANY DOCUMENTS(公司证件)",
      items:[
        {
          img:"http://tse1.mm.bing.net/th?&id=OIP.M03ddb507e56bc682450255da1a1b449do0&w=300&h=300&c=0&pid=1.9&rs=0&p=0",
          title:"业务范围",
          content:"公司从事智能大厦、智能交通、标线、监控工程、网络布线、坝体在线监测等办公设备以及周边耗材的销售与服务；代理海康威视智能监控产品(安防产品国内第一品牌)，并提供本地化售前售后服务。"
        },
        {
          img:"http://tse1.mm.bing.net/th?&id=OIP.Mcd305e986974c55725c94dbe7aef4560o0&w=300&h=300&c=0&pid=1.9&rs=0&p=0",
          title:"企业理念",
          content:"诚信为本、质量第一、服务第一"
        },
        {
          img:"http://tse1.mm.bing.net/th?&id=OIP.M719ef25f65d6fc556761f6c5967c053do0&w=284&h=300&c=0&pid=1.9&rs=0&p=0",
          title:"经营宗旨",
          content:"本着“诚信为本、质量第一、服务第一”的理念，以高标准的品质、经济合理的价格和优质完善的服务宗旨，博浩科技愿与社会各界同仁携手并进，共谋发展。我们将努力打造一支优良的团队，上至客户，下至同事，团结一致，一起创造将属于我们的辉煌！"
        },
      ]
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
<style>
.banner_bg4{
  background:url('http://t.cn/RVGi0yk') no-repeat #252525;
  background-size:100% 99%;
  /*margin-top: -20px;*/
  /*text-align: center;*/
  /*padding:100px 0 240px;*/
  /*color: #fff;*/
}
.ito_wrap{
  font-size: 1.8rem;
}
.ito_idt{
	text-indent:2em;
	position: relative;
	line-height: 1.8em;
	padding: 0;
}
.banner{
	position: relative;
	top: -20px;
  border-bottom: 6px solid #252525;
  /*opacity: .6;*/

}
.intro_item{
  color: #525252
}
.intro_item h3{
  font-weight: bold;
}
.intro_item:hover{
  opacity: .6;
}

/*.ito_wrap ul{
	padding: 1em
}*/
</style>
