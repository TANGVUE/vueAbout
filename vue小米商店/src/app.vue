<template>
  <div class="app-content">
    <transition mode="out-in">
      <router-view :allList="allList"  :orderList="orderList"  @add="add" @pay="pay"></router-view>
    </transition>
    <footerPlugin></footerPlugin>
  </div>
</template>

<script>
import footerPlugin from '../components/footerPlugin.vue';

export default {
  data() {
    return {
    allList: [
        {
          id:1,
          name: "小米1",
          url:require("../static/img/phone (1).png"),
          introduce: "这是一些详细介绍",
          type: "骁龙999",
          money: '19.9$'
        },
        {
          id:2,
          name: "小米2",
          url:require("../static/img/phone (2).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙760",
          money: '19.9$'
        },
        {
          id:3,
          name: "小米3",
          url:require("../static/img/phone (3).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙760",
          money: '19.9$'
        },
        {
          id:4,
          name: "小米4",
          url:require("../static/img/phone (4).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙760",
          money: '19.9$'
        },
        {
          id:5,
          name: "小米5",
          url:require("../static/img/phone (5).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙760",
          money: '19.9$'
        },
        {
          id:6,
          name: "小米6",
          url:require("../static/img/phone (6).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙999",
          money: '19.9$'
        },
        {
          id:7,
          name: "小米7",
          url:require("../static/img/phone (7).jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙760",
          money: '19.9$'
        },
        {
          id:8,
          name: "小米8",
          url:require("../static/img/phone1.jpg"),
          introduce: "这是一些详细介绍",
          type: "骁龙999",
          money: '19.9$'
        },
      ],
      orderList:[

      ]
    }
  },
  methods: {
    add:function(id){
      this.allList.some((obj,index)=>{
        if(obj.id == id){
          obj.state = '未付款';
          this.orderList.push(obj);
        }
      });
    },
    pay:function(id){
      this.allList.some((obj,index)=>{
        if(obj.id == id){
          obj.state = '已付款';
          this.orderList.unshift(obj);
        }
      });
    }
  },
  components:{
    footerPlugin
  }
};
</script>

<style scoped>
.app-content {
  overflow: hidden;
  width: 100%;
}
.v-enter {
  opacity: 0;
  transform: translateX(30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>
