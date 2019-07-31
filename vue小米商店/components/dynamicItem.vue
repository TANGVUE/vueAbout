<template>
  <div class="item-box">
    <div class="item-header">
      <div class="head">
        <img src="../static/img/head.jpg" width="100%">
      </div>
      <div class="introduce">
        <p>商家名称</p>
        <p>关于一些商家的具体介绍</p>
      </div>
    </div>
    <div class="show">
      <img src="../static/img/show.jpg" width="100%">
    </div>
    <div class="content">
      <div class="title">
        <span>#商家活动#</span>凡是今天购买总金额超过10000$,就可以任选一个一线美女超模sleep！
      </div>
      <div class="btn-menu">
        <div class="time">三分钟前</div>
        <div :class="['love',flag?'red':'']" @click="flag=!flag,show()">
          <span class="iconfont icon-duomeitiicon-"></span>
        </div>
        <div class="comment">
          <span class="iconfont icon-pinglun"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    show: function() {
      Toast({
        message: "点赞成功",
        duration: 1000
      });
    }
  }
};
</script>
<style scoped>
.item-box {
  position: relative;
  background-color: white;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0px 0px 1px 0px #9a949433;
}
.item-box .item-header {
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  padding: 5px 0px;
}
.item-box .item-header .head {
  float: left;
  width: 50px;
  height: 100%;
  margin-left: 7px;
  border-radius: 50%;
  overflow: hidden;
}
.item-box .item-header .introduce {
  float: left;
  height: 100%;
  margin-left: 15px;
}
.item-box .item-header .introduce p {
  margin-top: 3px;
}
.item-box .item-header .introduce p:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
}
.item-box .item-header .introduce p:nth-child(2) {
  font-size: 14px;
  font-weight: normal;
  color: rgb(185, 187, 192);
}
.item-box .show {
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.item-box .content {
  widows: 100%;
  height: 100px;
}
.item-box .content .title {
  font-size: 16px;
  font-weight: normal;
  margin-top: 7px;
  padding: 0px 5px;
}
.item-box .content .title span {
  color: #e6a23c;
}
.item-box .content .btn-menu {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0px;
  line-height: 40px;
  text-align: center;
}
.item-box .content .btn-menu .time {
  width: 100px;
  height: 100%;
  float: left;
  text-align: center;
  font-size: 13px;
  color: rgb(185, 187, 192);
}
.item-box .content .btn-menu .love {
  float: right;
  width: 60px;
  height: 100%;
  transition: all 0.3s ease-out;
}
.item-box .content .btn-menu .comment {
  float: right;
  width: 60px;
  height: 100%;
}
.iconfont {
  font-size: 27px;
}
.red {
  color: #ef4f4f;
}
</style>
