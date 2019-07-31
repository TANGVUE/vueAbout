<template>
  <div>
    <hot :shop="hot"></hot>
    <show v-for="item1 in yfList" :key="item1" :shop="item1" @func="set"></show>
  </div>
</template>

<script>
import hot from "./hot.vue";
import show from "./show.vue";
export default {
  data() {
    return {
      yfList:[],
      hot: {
        name: "VANS OFF THE WALL",
        introduce: "亚洲艺术联盟，超级联名",
        url: require("../../img/vansbig.jpg"),
        money: "6.6元起"
      }
    };
  },
  methods:{
    createList:function(){
       var newList=[];
       this.list.forEach(function(item ,i){
         if(item.type==2){
           newList.push(item);
         }
       });
       this.yfList=newList;
     },

     set:function(id){
      this.$emit('func',id);
    }
  },
  props:['list'],
  components: {
    show,
    hot
  },
  created() {
    this.createList();
  },
};
</script>

<style scoped>

</style>