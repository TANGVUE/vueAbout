<template>
  <div class="search-box">
    <mt-search v-model="value" style="height:52px;"></mt-search>
    <transition-group tag="div" name="list">
      <businessItem v-for="item in search(value)" :key="item.id" :obj="item"></businessItem>
    </transition-group>
  </div>
</template>
<script>
import businessItem from "../components/businessItem.vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  props: ["allList"],
  methods: {
    search: function(value) {
      if(value == '') return [];
      var list = [];
      this.allList.forEach(element => {
        if (element.name.indexOf(value) != -1||element.type.indexOf(value)!=-1) {
          list.push(element);
        }
      });
      return list;
    }
  },
  components: {
    businessItem
  }
};
</script>
<style scoped>
.search-box {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 55px;
}
.mint-search {
  position: fixed;
  top: 0px;
  width: 100%;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
</style>