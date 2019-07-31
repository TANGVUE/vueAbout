<template>
  <div>
    <hot :shop="hot"></hot>
    <show v-for="(item3,i) in gameList" :key="i" :shop="item3" @func="set"></show>
  </div>
</template>

<script>
import hot from "./hot.vue";
import show from "./show.vue";
export default {
  data() {
    return {
      gameList: [],
      hot: {
        name: "《APEX》",
        introduce: "挑战群雄，争霸你的未来",
        url: require("../../img/gamebig.jpg"),
        money: "19.9元起"
      }
    };
  },
  methods:{
     createList:function(){
       var newList=[];
       this.list.forEach(function(item ,i){
         if(item.type==3){
           newList.push(item);
         }
       });
       this.gameList=newList;
     }
  },
  props:['list'],
  components: {
    show,
    hot
  },
  created:function(){
    this.createList();
  },
  set:function(id){
      this.$emit('func',id);
    }
};
</script>

<style>
</style>