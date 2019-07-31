<template>
  <div>
    <div class="search-box">
      <h1>-请找到你的梦想-</h1>
      <div class="search-row">
        <div class="search">
          <input type="text" v-model="keypress">
          <button @click="search(keypress)">Search</button>
        </div>
      </div>
    </div>
    <transition-group tag="div" name="search">
        <show v-for="(item,i) in search(keypress)" :key="i" :shop="item"></show>
    </transition-group>
  </div>
</template>

<script>
import show from "./show.vue";
export default {
  data() {
    return {
      keypress: "",
    };
  },
  methods:{
    search:function(kp){
        var newList=[];
        this.list.forEach(function(item ,i){
            if(item.name.indexOf(kp)!=-1){
                newList.push(item);
            }
        });
        return newList;
    }  
  },
 props:['list'],
  components: {
    show
  }
};
</script>
<style scoped>
.search-enter,
.search-leave-to{
    opacity: 0;
    transform: translateY(-15px);
}
.search-enter-active,
.search-leave-active
{
    transition: all 0.4s ease;
}

.search-box {
  width: 100%;
  height: 280px;
  box-sizing: border-box;
  background-size: cover;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  margin-bottom: 50px;
}
.search-box h1 {
  text-align: center;
  font-weight: normal;
  padding-top: 70px;
}
.search-box .search-row {
  width: 100%;
  height: 50px;
}
.search-box .search-row .search {
  width: 728px;
  height: 100%;
  margin: 30px auto;
}
input:nth-child(1) {
  font-size: 25px;
  width: 600px;
  height: 47px;
}
button {
  font-size: 15px;
  width: 110px;
  height: 100%;
  background-color: #ec4d1ced;
  outline: none;
  border: none;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
</style>