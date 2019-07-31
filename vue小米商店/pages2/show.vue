<template>
  <div class="show-page">
    <mt-header fixed title="小米商城">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="image-box">
      <img :src="obj.url">
    </div>
    <div class="add-pay">
      <div class="add" @click="add">加入购物车</div>
      <div class="pay" @click="pay">直接抢购</div>
    </div>
    <div class="introduce-box">
      <p>商品名称：{{ obj.name }}</p>
      <p>小米最新款式,搭载骁龙超强性能处理器,2800万像素前后双摄,带来清晰质感,完美外观,全新体验。</p>
      <p>月销量99999</p>
    </div>
    <div class="kuaidi-box">
      <p>
        发货地址：
        <span>深圳小米官方基地</span>
      </p>
      <p>
        邮费：
        <span>0.05￥</span>
      </p>
      <p>
        收货地址：
        <span>请选择</span>
      </p>
    </div>
    <div class="comment-box">
      <p>全部商品评论(999+)</p>
      <p>非常好用，非常牛逼！</p>
      <p>这些东西都非常的完美，我特别喜欢...</p>
      <p>nbnbnbnbnbnb</p>
      <p>加载更多...</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      obj: {
        id: 1,
        name: "小米",
        url: require("../static/img/phone (1).png")
      }
    };
  },
  props: ["allList"],
  methods: {
    add: function() {
      this.$emit("add", this.obj.id);
      Toast({
        message: "已经加入购物车！",
        duration: 1000
      });
    },
    pay: function() {
      this.$emit("pay", this.obj.id);
      Toast({
        message: "已经支付成功！",
        duration: 1000
      });
    }
  },
  created() {
    this.allList.some((obj, index) => {
      if (obj.id == this.$route.params.id) {
        this.obj.id = obj.id;
        this.obj.name = obj.name;
        this.obj.url = obj.url;
        return true;
      }
    });
  }
};
</script>

<style scoped>
.mint-header {
  background-color: white;
  color: #67c23a;
}
a {
  text-decoration: none;
}

.show-page {
  width: 100%;
  padding-top: 48px;
  padding-bottom: 55px;
}
.image-box {
  width: 100%;
  margin-bottom: 25px;
}
.image-box img {
  width: 90%;
  margin-left: 5%;
}

.add-pay {
  width: 100%;
  height: 48px;
}
.add,
.pay {
  width: 50%;
  float: left;
  height: 100%;
  line-height: 48px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
.add {
  background-color: #ff9000;
}
.pay {
  background-color: #ff4200;
}

.introduce-box,
.kuaidi-box,
.comment-box {
  margin: 15px 5px;
  border-radius: 10px;
  padding: 15px 0px;
  background-color: white;
  box-shadow: 0px 1px 1px 0px #9a949433;
}
p {
  padding: 5px 15px;
}
.introduce-box p:nth-child(1) {
  font-size: 19px;
  font-weight: bold;
}

.introduce-box p:nth-child(2) {
  font-size: 17px;
  font-weight: normal;
  color: #7d7d7d;
}
.introduce-box p:nth-child(3) {
  font-size: 14px;
  font-weight: normal;
  text-align: center;
}
.kuaidi-box p {
  color: #7d7d7d;
}
.kuaidi-box span {
  color: black;
}

.comment-box p:nth-child(1) {
  text-align: center;
}
.comment-box p:nth-child(2),
.comment-box p:nth-child(3),
.comment-box p:nth-child(4) {
  color: #7d7d7d;
}
.comment-box :nth-last-child(1) {
  text-align: center;
}
</style>
