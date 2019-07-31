<template>
  <div class="personal-box">
    <div class="main">
      <div class="head" @click="sheetVisible=!sheetVisible">
        <img src="../static/img/801073.png">
        <div class="name">用户名称</div>
        <div class="mode">
          <span>客服模式</span>
        </div>
      </div>
      <div class="menu">
        <div class="baoming">
          <span class="iconfont icon-icon"></span>
          已经付款
        </div>
        <div class="guanzhu">
          <span class="iconfont icon-guanzhu1"></span>
          已经关注
        </div>
      </div>
      <div class="menu">
        <div class="children">
          <span class="iconfont icon-haizi"></span>
          商品评价
        </div>
        <div class="children">
          <span class="iconfont icon-huodong1"></span>
          最新活动
        </div>
      </div>
    </div>
    <order v-for="item in orderList" :key="item.id" :obj="item"></order>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import order from '../components/order.vue';
export default {
  data() {
    return {
      flag: false,
      flag1: false,
      sheetVisible:false,
      actions:[
          {
              name:'切换账号',
              method:function(){
                  console.log(111);
              }
          },
           {
              name:'注销',
              method:function(){
                  console.log(222);
              }
          }
      ]
    }
  },
  components:{
    order
  },
  props:['orderList']

};
</script>
<style scoped>
.iconfont {
  font-size: 28px;
}
.personal-box {
  width: 100%;
  height: 100%;
  padding-bottom: 58px;
}
.main {
  width: 100%;
  height: 205px;
  background-color: white;
}
.main .head {
  height: 70px;
  padding: 15px 10px;
}
.main .head img {
  width: 70px;
  height: 70px;
  float: left;
}
.main .head .name {
  height: 100%;
  line-height: 70px;
  font-size: 23px;
  font-weight: bold;
  float: left;
  margin-left: 15px;
}
.main .head .mode {
  height: 100%;
  float: right;
  line-height: 70px;
  font-size: 15px;
  color: #67c23a;
}
.main .head .mode span {
  border-radius: 5px;
  border: 2px solid #67c23a;
}
.main .menu {
  padding: 0px 8px;
  height: 50px;
}
.main .menu:nth-child(2) div {
  border-bottom: 1px solid #e2e2e25e;
}
.main .menu div {
  width: 50%;
  text-indent: 1em;
  line-height: 50px;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.main .menu div:nth-child(1) {
  border-right: 1px solid #e2e2e25e;
}
.message {
  margin: 10px 7px;
  height: 80px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.4s ease;
}
.message .top {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e2e2e25e;
}
.message .top .title {
  float: left;
  height: 100%;
  padding: 0px 10px;
  line-height: 40px;
}
.message .top .icon {
  float: right;
  line-height: 40px;
  height: 100%;
  margin-right: 5px;
}
.message .top .icon .iconfont {
  font-size: 21px;
}
.message .content {
  padding: 10px 15px;
}
.longHeight {
  height: 240px;
  overflow: scroll;
}
</style>