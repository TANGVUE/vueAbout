<template>
  <div>
    <div class="header">
      <div class="header-in">
        <div class="logo">OnlineShop</div>
        <ul>
          <li>
            <router-link to="/app/dzsb">返回商城</router-link>
          </li>
          <li>联系我们</li>
          <li>举报投诉</li>
        </ul>
      </div>
    </div>
    <div class="account">
      <div class="image">
        <img src="../../img/rwm1.jpg" width="100%">
      </div>
      <div class="data">
        <div class="name datas">
          <p>{{account.user}}</p>
          <p>用户名</p>
          <p>修改</p>
        </div>
        <div class="money datas">
          <p>{{account.money}}</p>
          <p>余额</p>
          <p>充值</p>
        </div>
        <div class="pay datas">
          <p>{{payCount}}</p>
          <p>已付款</p>
          <p @click="getPay">查看</p>
        </div>
        <div class="cart datas">
          <p>{{cartCount}}</p>
          <p>购物车</p>
          <p @click="getCart(),flag=!flag">查看</p>
        </div>
        <router-link to="/shopping/login" class="out" tag="div">
          <button @click="out">注销</button>
        </router-link>
      </div>
    </div>
    <div class="show-box">
      <transition-group appear mode="out-in" tag="div">
        <show2 v-for="item in list" :key="item.id" :items="item" @func="del" @setSum="setSum"></show2>
      </transition-group>
    </div>
    <div class="pay-button-box">
      <div>订单数：{{count}}</div>
      <div>总价：{{sum}}</div>
      <button @click="pay">支付</button>
    </div>
  </div>
</template>

<script>
import show2 from "./show2.vue";
export default {
  data() {
    return {
      list: [],
      payList: [],
      cartList: [],
      sum: 0,
      flag: true,
      payCount: 0,
      cartCount: 0
    };
  },
  computed: {
    count: function() {
      return this.cartList.length;
    },
    payCount: function() {
      return this.payList.length;
    },
    cartCount: function() {
      return this.cartList.length;
    }
  },
  // 要加入购物车的数据
  props: ["addList", "account"],
  methods: {
    // 设置展示订单数据
    setPay: function() {
      this.list = this.payList;
    },
    // 设置展示购物车数据
    setCart: function() {
      // 进行合并操作了 ，而不单纯赋值了
      this.list = this.cartList = this.addList;
    },
    // 获取购物车列表
    getCart: function() {
      this.$emit("carts");
    },
    // 获取订单数据
    getPay: function() {
      // this.axios.get("http://localhost:8080/api/vi/orders"),
      //   then(body => {
      //     if (body.status == 200) {
      //       var arr = body.data;
      //       var obj = {};
      //       this.arr.forEach(element => {
      //         obj.id = element.itemId;
      //         obj.payment = element.payment;
      //         obj.count = element.num;
      //         obj.createdTime = element.created;
      //         this.payList.push(obj);
      //       });
      //     } else {
      //       alert("订单数据获取失败！");
      //     }
      //   });
    },
    //计算总和
    setSum: function() {
      this.sum = 0;
      if (this.cartList.length > 0) {
        this.cartList.forEach(element => {
          this.sum = (
            parseFloat(this.sum) +
            parseFloat(element.count * parseFloat(element.money))
          ).toFixed(1);
        });
      }
    },
     // 购物车支付
    pay: function() {
      // this.axios.post("http://localhost:8080/api/vi/orders/payOrderaaQ",{
      //   data:this.cartList
      // }).then(body =>{
      //   if(body.status =200){
      //     alert("购买成功！");
      //   }else if(body.status=500){
      //     alert("余额不足！");
      //   }else{
      //     alert("支付错误！");
      //   }

      // });
    },
    del: function(id) {
      var index;
      this.list.some(function(item, i) {
        if (item.id === id) {
          index = i;
          return true;
        }
      });
      this.cartList.splice(index, 1);
    },
    out: function() {
      var date = new Date();
      date.setTime(date.getTime() - 10000);
      document.cookie = "user=" + ";expires=" + date.toGMTString();
      console.log("退出了");
    }
  },
  components: {
    show2
  },
  created: function() {
    // 发起ajax请求，获取个人数据

    if (this.account.user == "") {
      // 考虑到获取数据的情况
      window.history.back(-1);
    }
    // 获取订单数据
    this.getPay();
    // 获取购物车列表
    this.getCart();
    // 设置展示购物车数据
    this.setCart();
    //
    this.setSum();
    // window.onbeforeunload = function() {
    //   this.axios
    //     .post("http://localhost:8080/api/v1/carts/getCartsToOption", {
    //       data: this.cartList
    //     })
    //     .then(body => {
    //       if (body.status == 200) {
    //         console.log("保存购物车列表成功");
    //       } else {
    //         console.log("保存购物车列表失败");
    //       }
    //     });
    // };
  },
  beforeDestroy: function() {
    // this.axios
    //   .post("http://localhost:8080/api/v1/carts/getCartsToOption", {
    //     data: this.cartList
    //   })
    //   .then(body => {
    //     if (body.status == 200) {
    //       console.log("保存购物车列表成功");
    //     } else {
    //       console.log("保存购物车列表失败");
    //     }
    //   });
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.header {
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
.header-in {
  width: 1200px;
  height: 100%;
  margin: 0px auto;
}

.header-in .logo {
  width: 180px;
  height: 100%;
  font-size: 37px;
  font-weight: normal;
  text-align: center;
  line-height: 80px;
  float: left;
}

.header-in ul {
  float: right;
  width: 300pxl;
  list-style: none;
}
.header-in li {
  width: 100px;
  height: 100%;
  text-align: center;
  line-height: 80px;
  float: left;
}
.header-in a {
  text-decoration: none;
  color: black;
}
.account {
  width: 1200px;
  height: 200px;
  margin: 15px auto;
  background-color: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);
}
.account .image {
  width: 200px;
  height: 100%;
  float: left;
}
.account .data {
  width: 1000px;
  height: 100%;
  float: left;
}
.account .data .datas {
  width: 200px;
  height: 200px;
  float: left;
  margin: 0px 15px;
}
p:nth-child(1) {
  font-size: 20px;
  font-weight: bold;
  padding: 25px 15px;
}
p:nth-child(2) {
  padding: 15px 15px;
  font-size: 15px;
  font-weight: normal;
}
p:nth-child(3) {
  padding: 15px 15px;
  font-size: 15px;
  font-weight: normal;
  color: #4184e8;
  cursor: pointer;
}

.show-box {
  width: 1200px;
  margin: 50px auto;
}
.account .out {
  float: left;
  margin-top: 79px;
}
.account .out button {
  width: 60px;
  height: 35px;
  background-color: #ff3434;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: normal;
}
.pay-button-box {
  width: 1200px;
  height: 60px;
  margin: 0px auto;
  margin-bottom: 30px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 3px 3px #00000036;
}
.pay-button-box div {
  float: left;
  width: 280px;
  height: 100%;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}
.pay-button-box button {
  width: 150px;
  height: 40px;
  background-color: #ff6700b0;
  margin-left: 430px;
  margin-top: 10px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
}
</style>
