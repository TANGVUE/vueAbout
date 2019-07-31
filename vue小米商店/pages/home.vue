<template>
  <div class="home">
    <mt-header fixed title="小米商城"></mt-header>
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item>
        <img src="../static/img/bg01.jpg" style="width:100%;height:200px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../static/img/bg02.jpg" style="width:100%;height:200px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../static/img/bg03.jpg" style="width:100%;height:200px;">
      </mt-swipe-item>
    </mt-swipe>
    <div class="menu">
      <div @click="flag=true;flag1=false;flag2=false;flag3=false;">
        <img src="../static/img/phone (4).jpg" alt>
        <p>小米手机</p>
      </div>
      <div @click="flag=false;flag1=true;flag2=false;flag3=false;">
        <img src="../static/img/i2.jpg" alt>
        <p>笔记本</p>
      </div>
      <div @click="flag=false;flag1=false;flag2=true;flag3=false;">
        <img src="../static/img/i3.jpg" alt>
        <p>小米家电</p>
      </div>
      <div @click="flag=false;flag1=false;flag2=false;flag3=true;">
        <img src="../static/img/i4.jpg" alt>
        <p>小米配件</p>
      </div>
    </div>
    <div class="title">猜你喜欢</div>
    <businessItem v-for="item in allList" :key="item.id" :obj="item"></businessItem>
  </div>
</template>
<script>
import businessItem from "../components/businessItem.vue";
export default {
  data() {
    return {
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false
    };
  },
  props: ["allList"],
  components: {
    businessItem
  }
};
</script>
<style scoped>
.home {
  padding-top: 45px;
  padding-bottom: 55px;
}
.mint-header {
  color: #67c23a;
  background-color: white;
  box-shadow: 0px 1px 1px 0px #9a949433;
}
.menu {
  display: flex;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  background-color: white;
}
.menu div {
  width: 25%;
  height: 100%;
  text-align: center;
}
.menu div p {
  font-size: 14px;
}
.menu div img {
  width: 70%;
  margin-top: 5px;
}
.title {
  text-align: center;
  width: 100%;
  height: 25px;
  font-size: 16px;
  font-weight: normal;
  background-color: white;
  line-height: 25px;
  margin-top: 15px;
  border-bottom: 1px solid #7d7d7d1f;
}
.itemShow {
  width: 100%;
  transition: all 0.3s ease;
  background-color: white;
  overflow: hidden;
}
.item {
  float: left;
  width: 75px;
  border-radius: 5px;
  font-size: 13px;
  height: 30px;
  margin: 10px 9px;
  line-height: 30px;
  text-align: center;
  background-color: #7d7d7d1f;
}
</style>
