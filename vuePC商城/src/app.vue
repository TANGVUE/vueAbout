<template>
  <div style="background-color: #f5f5f5;">
    <div class="head">
      <div class="head-menu-border">
        <div class="head-menu">
          <div class="logo">OnlineShop</div>
          <ul>
            <li @mouseenter="flag=!flag" @mouseleave="flag=!flag">
              <a href="#">促销活动</a>
              <transition>
                <div class="menu1" v-show="flag">
                  <p>促销活动1</p>
                  <p>促销活动2</p>
                  <p>促销活动3</p>
                  <p>促销活动4</p>
                  <p>促销活动4</p>
                  <p>促销活动4</p>
                </div>
              </transition>
            </li>
            <li @mouseenter="flag1=!flag1" @mouseleave="flag1=!flag1">
              <a href="#">疯狂热卖</a>
              <transition>
                <div class="menu1" v-show="flag1">
                  <p>热卖商品</p>
                  <p>热卖商品</p>
                  <p>热卖商品</p>
                  <p>热卖商品</p>
                  <p>热卖商品</p>
                  <p>热卖商品</p>
                </div>
              </transition>
            </li>
            <li @mouseenter="flag2=!flag2" @mouseleave="flag2=!flag2">
              <a href="#">特价活动</a>
              <transition>
                <div class="menu2" v-show="flag2">
                  <p>@特价活动</p>
                  <p>@特价活动</p>
                  <p>@特价活动</p>
                  <p>@特价活动</p>
                  <p>@VIP专属活动区域</p>
                  <p>@VIP专属活动区域</p>
                  <p>这都是关于特接活动的介绍信息</p>
                  <p>这都是关于特接活动的介绍信息</p>
                  <p>这都是关于特接活动的介绍信息</p>
                </div>
              </transition>
            </li>
            <li @mouseenter="flag3=!flag3" @mouseleave="flag3=!flag3">
              <a href="#">动态新闻</a>
              <transition>
                <div class="menu3" v-show="flag3">
                  <p>@ONLINESHOP</p>
                  <p>@动态消息</p>
                  <p>@动态消息</p>
                  <p>@动态消息</p>
                  <p>@Online上线动态消息</p>
                  <p>@Online上线动态消息</p>
                  <p>@Online上线动态消息</p>
                  <p>@Online上线动态消息</p>
                </div>
              </transition>
            </li>
            <li>
              <router-link :to="url">
                <p @click="accountCheck">我的账户</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="lunbotu-box">
        <div class="lunbotu">
          <ul>
            <transition name="lunbotu" mode="out-in" appear>
              <li v-if="show0" key="show0">
                <img src="../img/bg1.jpg" alt="1">
              </li>
              <li v-if="show1" key="show1">
                <img src="../img/bg2.jpg" alt="2">
              </li>
              <li v-if="show2" key="show2">
                <img src="../img/bg3.jpg" alt="3">
              </li>
              <li v-if="show3" key="show3">
                <img src="../img/bg4.jpg" alt="4">
              </li>
            </transition>
          </ul>
        </div>
        <div class="lunbotu-btn">
          <div class="btn-left" @click="leftMove">Left</div>
          <div class="btn-right" @click="rightMove">Right</div>
        </div>
        <div class="animate-box">
          <transition name="animate1" mode="out-in" appear>
            <div class="animated" v-if="show0" key="show0">
              <h1>“本站购买小米手机只需19￥”</h1>
              <h2>“吴亦凡：你说小米，我说溜”</h2>
            </div>
            <div class="animated" v-if="show1" key="show1">
              <h1 style="color:black;">购物狂欢节，凡是美女1折购买所有商品</h1>
              <h2 style="color:rgb(255,255,255);">“唐某人：我要是有钱了，必要感受天下美女！”</h2>
            </div>
            <div class="animated" v-if="show2" key="show2">
              <h1 style>新店开张，所有服饰商品买一送一！！</h1>
              <h2 style="text-align:center">“唐某人：都是第一次做人，该为自己消费了！”</h2>
            </div>
            <div class="animated" v-if="show3" key="show3">
              <h1 style="text-align:center">庆祝IG春季决赛夺冠，购买外设送全套IG冠军皮肤</h1>
              <h2 style="text-align:center">“波比：我有一个特点，不擅长倒下！”</h2>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="routerlink-box">
      <div class="routerlink">
        <ul>
          <li>
            <router-link to="/app/search" tag="a">搜索商品</router-link>
          </li>
          <li>
            <router-link to="/app/game" tag="a">购买游戏</router-link>
          </li>
          <li>
            <router-link to="/app/dzsb" tag="a">电子设备</router-link>
          </li>
          <li>
            <router-link to="/app/yf" tag="a">时尚服饰</router-link>
          </li>
          <li>
            <router-link to="/app/ws" tag="a">酷炫外设</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="routerview-box">
      <div class="routerview">
        <transition name="router" mode="out-in" appear>
          <router-view :list="list" @func="set"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      show0: true,
      show1: false,
      show2: false,
      show3: false,
      showNum: 0,
      url: "",
      addList: []
    };
  },
  props: ["list","addList"],
  methods: {
    rightMove: function() {
      switch (this.showNum) {
        case 0:
          this.show0 = !this.show0;
          this.show1 = !this.show1;
          break;
        case 1:
          this.show1 = !this.show1;
          this.show2 = !this.show2;
          break;
        case 2:
          this.show2 = !this.show2;
          this.show3 = !this.show3;
          break;
        case 3:
          this.show3 = !this.show3;
          this.show0 = !this.show0;
          break;
      }
      this.showNum += 1;
      if (this.showNum == 4) {
        this.showNum = 0;
      }
    },
    leftMove: function() {
      switch (this.showNum) {
        case 0:
          this.show0 = !this.show0;
          this.show3 = !this.show3;
          break;
        case 1:
          this.show1 = !this.show1;
          this.show0 = !this.show0;
          break;
        case 2:
          this.show2 = !this.show2;
          this.show1 = !this.show1;
          break;
        case 3:
          this.show3 = !this.show3;
          this.show2 = !this.show2;
          break;
      }
      this.showNum -= 1;
      if (this.showNum == -1) {
        this.showNum = 3;
      }
    },
    lunbotu: function() {
      setInterval(() => {
        this.rightMove();
      }, 8000);
    },
    // 发送加入购物车的商品数据到父组件
    set: function(id) {
      this.$emit("func", id);
    },
    accountCheck: function() {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split(";");
      var arr = arrCookie[0].split("=");
      if (
        arr[0] == "user" &&
        arr[1] !== undefined &&
        arr[1] !== null &&
        arr[1] !== ""
      ) {
        this.url = "/shopping/shopCart";
      } else {
        this.url = "/shopping/login";
      }
    }
  },
  created: function() {
    // 关闭浏览器发送购物车数据
    window.onbeforeunload = function() {
      this.axios
        .post("http://localhost:8080/api/v1/carts/getCartsToOption", {
          data: this.addList
        })
        .then(body => {
          if (body.status == 200) {
            console.log("保存购物车列表成功");
          } else {
            console.log("保存购物车列表失败");
          }
        });
    };
    this.lunbotu();
  }
};
</script>
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
.lunbotu-enter {
  opacity: 0;
  transform: translateX(200px);
}
.lunbotu-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.lunbotu-enter-active,
.lunbotu-leave-active {
  transition: all 0.2s ease;
}
.animate1-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.animate1-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.animate1-enter-active,
.animate1-leave-active {
  transition: all 0.5s ease;
}
.router-enter {
  opacity: 0;
  transform: translateX(100px);
}
.router-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.router-enter-active,
.router-leave-active {
  transition: all 0.4s ease;
}

.head {
  width: 100%;
  height: 720px;
}
.head .head-menu {
  width: 1200px;
  height: 100px;
  margin: 0px auto;
}
.head-menu-border {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: white;
}
.head .head-menu .logo {
  width: 180px;
  height: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  float: left;
  line-height: 100px;
}
.head .head-menu ul {
  width: 500px;
  list-style: none;
  float: right;
}
.head .head-menu a {
  display: block;
  width: 100%;
  height: 19px;
  margin-top: 32px;
  text-decoration: none;
  color: black;
  text-align: center;
  transition: all 0.4s ease;
}
.head .head-menu a:hover {
  background-color: goldenrod;
}
.head .head-menu li {
  position: relative;
  width: 100px;
  height: 100%;
  font-size: 17px;
  float: left;
  font-weight: 550;
}
.head .head-menu .menu1,
.head .head-menu .menu2,
.head .head-menu .menu3 {
  position: absolute;
  width: 130px;
  height: 240px;
  background-color: rgba(255, 255, 255, 0.9);
  top: 60px;
  border-radius: 5px;
  box-shadow: 0px 3px 3px 0px black;
  z-index: 100;
}
.head .head-menu .menu2 {
  width: 260px;
  height: 420px;
}
.head .head-menu .menu3 {
  width: 260px;
  height: 310px;
}
.head .head-menu .menu1 p,
.head .head-menu .menu2 p,
.head .head-menu .menu3 p {
  font-weight: 550;
  margin-top: 15px;
  text-align: center;
  font-size: 17px;
  color: #2d3a4b;
  cursor: pointer;
}
.head .head-menu .menu2 p {
  color: #3a5169;
  text-align: left;
  padding: 0px 15px;
}
.head .head-menu .menu3 p {
  color: #3a5169;
  text-align: left;
  padding: 0px 15px;
}
.head .lunbotu-box {
  position: relative;
  width: 100%;
  height: 620px;
}
.head .lunbotu-box .lunbotu img {
  width: 100%;
  height: 620px;
}
.head .lunbotu-box .lunbotu {
  position: absolute;
  background-color: #2d3a4b;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.head .lunbotu-box .lunbotu ul {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  list-style: none;
}
.head .lunbotu-box .lunbotu li {
  width: 100%;
  height: 100%;
  float: left;
}
.head .lunbotu-box .lunbotu-btn {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 260px;
  z-index: 90;
}
.head .lunbotu-box .lunbotu-btn .btn-left,
.head .lunbotu-box .lunbotu-btn .btn-right {
  width: 100px;
  height: 100%;
  text-align: center;
  line-height: 100px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.head .lunbotu-box .lunbotu-btn .btn-left {
  float: left;
}
.head .lunbotu-box .lunbotu-btn .btn-right {
  float: right;
}
.head .lunbotu-box .animate-box {
  width: 100%;
  height: 500px;
  position: absolute;
}
.head .lunbotu-box .animated {
  width: 1200px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0px auto;
}
.head .lunbotu-box .animated h1,
.head .lunbotu-box .animated h2 {
  padding: 15px 15px;
}
.head .lunbotu-box .animated h1 {
  margin-top: 100px;
  font-size: 60px;
}
.head .lunbotu-box .animated h2 {
  margin-top: 60px;
  font-size: 35px;
  color: gold;
}
.routerlink-box {
  width: 100%;
  height: 45px;
  box-shadow: 0px 3px 3px 0px #00000036;
  background-color: white;
}
.routerlink-box .routerlink {
  width: 1200px;
  height: 100%;
  margin: 0px auto;
}
.routerlink-box .routerlink ul {
  width: 100%;
  list-style: none;
}
.routerlink-box .routerlink ul li {
  float: left;
  width: 20%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  transition: all 0.4s ease;
}
.routerlink-box .routerlink ul li a {
  text-decoration: none;
  color: black;
  font-size: 17px;
  font-weight: 320;
}
.routerview-box {
  width: 100%;
  margin-top: 15px;
}
.routerview-box .routerview {
  width: 1200px;
  margin: 0px auto;
  overflow: hidden;
}
</style>

