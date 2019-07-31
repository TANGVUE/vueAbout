<template>
  <div>
    <hot :shop="hot"></hot>
    <show v-for="item2 in wsList" :key="item2" :shop="item2" @func="set"></show>
  </div>
</template>

<script>
import hot from "./hot.vue";
import show from "./show.vue";
export default {
  data() {
    return {
      wsList: [],
      hot: {
        name: "达尔优外设",
        introduce: "创新未来，技术时尚",
        url: require("../../img/wsbig.jpg"),
        money: "5.6元起"
      }
    };
  },
  methods:{
     createList:function(){
       var newList=[];
       this.list.forEach(function(item ,i){
         if(item.type==1){
           newList.push(item);
         }
       });
       this.wsList=newList;
     },
     set:function(id){
      this.$emit('func',id);
    } 
  },
  props: ["list"],
  components: {
    show,
    hot
  },
  created: function() {
    this.createList();
  }
};
</script>

<style>
</style>