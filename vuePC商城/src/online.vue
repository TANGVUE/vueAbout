<template>
  <div>
    <transition name="main" mode="out-in">
      <router-view
        @func="getAddCart"
        @getAccount="getAccount"
        :addList="addList"
        :list="list"
        :account="account"
      ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addList: [],
      list: [
        // 电子设备
        {
          id:0,
          name:'小米',
          url:require('../img/phone (1).png'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:1,
          name:'小米',
          url:require('../img/phone (2).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:2,
          name:'小米',
          url:require('../img/phone (3).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:3,
          name:'小米',
          url:require('../img/phone (4).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:4,
          name:'小米',
          url:require('../img/phone (5).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:5,
          name:'小米',
          url:require('../img/phone (6).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        {
          id:6,
          name:'小米',
          url:require('../img/phone (7).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'19.9$',
          type:4,
        },
        // 游戏商品
        {
          id:7,
          name:'game',
          url:require('../img/game (1).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:8,
          name:'game',
          url:require('../img/game (2).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:9,
          name:'game',
          url:require('../img/game (3).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:10,
          name:'game',
          url:require('../img/game (4).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:11,
          name:'game',
          url:require('../img/game (5).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:12,
          name:'game',
          url:require('../img/game (6).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        {
          id:13,
          name:'game',
          url:require('../img/game (7).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'8.99$',
          type:3,
        },
        // 衣服商品
        {
          id:14,
          name:'vans',
          url:require('../img/vans (1).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:15,
          name:'vans',
          url:require('../img/vans (2).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:16,
          name:'vans',
          url:require('../img/vans (3).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
        {
          id:17,
          name:'vans',
          url:require('../img/vans (4).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:18,
          name:'vans',
          url:require('../img/vans (5).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
        {
          id:19,
          name:'vans',
          url:require('../img/vans (6).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:20,
          name:'vans',
          url:require('../img/vans (7).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:21,
          name:'vans',
          url:require('../img/vans (8).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
        {
          id:22,
          name:'vans',
          url:require('../img/vans (9).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
         {
          id:23,
          name:'vans',
          url:require('../img/vans (10).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
        {
          id:24,
          name:'vans',
          url:require('../img/vans (11).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:2,
        },
        // 外设商品
        {
          id:25,
          name:'外设商品',
          url:require('../img/ws (1).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:26,
          name:'外设商品',
          url:require('../img/ws (2).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:27,
          name:'外设商品',
          url:require('../img/ws (3).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:28,
          name:'外设商品',
          url:require('../img/ws (5).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:29,
          name:'外设商品',
          url:require('../img/ws (4).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:30,
          name:'外设商品',
          url:require('../img/ws (6).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:31,
          name:'外设商品',
          url:require('../img/ws (7).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:32,
          name:'外设商品',
          url:require('../img/ws (8).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:33,
          name:'外设商品',
          url:require('../img/ws (9).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
          {
          id:34,
          name:'外设商品',
          url:require('../img/ws (10).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
         {
          id:35,
          name:'外设商品',
          url:require('../img/ws (11).jpg'),
          introduce:'这些就是一些商品的介绍而已',
          money:'6.98$',
          type:1,
        },
      ],
      account: {
        user: "",
        money: 9990
      }
    };
  },
  methods: {
    // 获取登入信息
    getAccount: function(user) {
      this.account.user = user;
    },
    //   获取加入购物车的数据
    // getAddCart: function(id) {
    //   var flag;
    //   var _this = this;
    //   flag = this.addList.some(function(item, index) {
    //     if (item.id == id) {
    //       item.count += 1;
    //       return true;
    //     }
    //   });
    //   if (!flag) {
    //     this.list.some(function(item, index) {
    //       if (item.id == id) {
    //         item.count = 1;
    //         _this.addList.push(item);
    //       }
    //     });
    //   }
    // },
    // 获取全部商品数据
    getAll: function() {
      // this.axios.get("http://localhost:8080/api/v1/items").then(body => {
      //   var itemList = body.data;
      //   itemList.forEach(element => {
      //     var obj = {};
      //     obj.id = element.id;
      //     obj.name = element.title;
      //     obj.url = element.image;
      //     obj.introduce = element.sellPoint;
      //     obj.money = element.price;
      //     obj.type = element.tbItemCat.id;
      //     obj.count = 0;
      //     this.list.push(obj);
      //   });
      // });
      console.log('获取商品数据成功！');
    },
    // 获取购物车列表，存在addlist让shopCart取值
    getCart:function(){
      // this.axios.get("http://localhost:8080/api/v1/carts").then(body =>{
      //   var arr=body.data;
      //   if(this.addList.length == 0){
      //     this.arr.forEach(element =>{
      //       this.list.some(item =>{
      //         if(element.itemId == item.id){
      //           item.count=element.number;
      //           this.addList.push(item);
      //           return true;
      //         }
      //       });
      //     });
      //   }
      // });
    }
  },
  created: function() {
    this.getAll();
    // 判断时候以前登入过
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    console.log(arrCookie);
    if (arrCookie.length > 1) {
      var userArr = arrCookie[0].split("=");
      var psdArr = arrCookie[1].split("=");
      if (userArr[0] == "user") {
        // this.axios.post("http://localhost:8080/api/v1/users", {
        //   account: userArr[1],
        //   password: psdArr[1]
        // }),
        //   then(body => {
        //     if (body.status == 200) {
        //       this.getAccount(userArr[1], body.data.money);
        //     }
        //   });
          this.getAccount(userArr[1]);
      }
    }
    window.onbeforeunload = function() {
      // this.axios
      //   .post("http://localhost:8080/api/v1/carts/getCartsToOption", {
      //     data: this.addList
      //   })
      //   .then(body => {
      //     if (body.status == 200) {
      //       console.log("保存购物车列表成功");
      //     } else {
      //       console.log("保存购物车列表失败");
      //     }
      //   });
    };
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.main-enter,
.main-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.main-enter-active,
.main-leave-active {
  transition: all 0.4s ease;
}
</style>
