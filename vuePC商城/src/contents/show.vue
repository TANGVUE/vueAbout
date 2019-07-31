<template>
  <div class="item-box">
    <div class="item">
      <img :src="shop.url" alt="1">
        <div class="content">
          <P>{{shop.name}}</P>
          <P>{{shop.introduce}}</P>
          <P>{{shop.money}}</P>
          <a href="javascript:;" @click="set">加入购物车</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
      set:function(){
          this.$emit('func',this.shop.id);
          alert("已加入购物车");
      }
  },
  props: ["shop"]
};
</script>
<style scoped>

.item-box {
  width: 300px;
  height: 400px;
  float: left;
  margin: 15px 0px;
}
.item {
  width: 270px;
  height: 400px;
  margin: 0px 15px;
  background-color: white;
  box-shadow: 0px 3px 3px #00000036;
  transition: all 0.2s ease;
  cursor: pointer;
}
.item img {
  width: 100%;
  height: 270px;
}
.item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px #00000036;
}
p {
  text-align: center;
}
p:nth-child(1) {
  font-size: 18px;
}
p:nth-child(2) {
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 300;
  padding: 10px 0px;
}
p:nth-child(3) {
  color: #ff6700;
  font-size: 18px;
}
.content{
  width: 100%;
  height: 100px;
}
.content a{
  text-decoration: none;
  display: block;
  text-align: center;
  background-color: #ff6700b0;
  color: white;
  width: 100px;
  height: 28px;
  line-height: 28px;
  font-weight: normal;
  margin: 5px auto;
  border-radius: 6px;
}
</style>