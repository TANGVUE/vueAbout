<template>
  <div>
    <hot :shop="hot"></hot>
    <show v-for="item in dzsbList" :key="item" :shop="item" @func="set"></show>
  </div>
</template>

<script>
import hot from "./hot.vue";
import show from "./show.vue";

export default {
  data() {
    return {
      dzsbList: [],
      hot: {
        name: "小米9",
        introduce: "骁龙855，索尼4800万微距三摄",
        url: require("../../img/dzsbbig.jpg"),
        money: "19元"
      }
    };
  },
  methods: {
    createList: function() {
      var newList = [];
      this.list.forEach(function(item, i) {
        if (item.type==4) {
          newList.push(item);
        }
      });
      this.dzsbList = newList;
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