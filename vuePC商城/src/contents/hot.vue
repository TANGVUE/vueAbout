<template>
  <div class="hot-item">
    <img :src="shop.url">
    <div class="content">
      <h1>{{shop.name}}</h1>
      <p>{{shop.introduce}}</p>
      <h2>{{shop.money}}</h2>
      <p style="margin-top:50px">了解更多></p>
    </div>
  </div>
</template>

<script>
export default {
    props:['shop']
};
</script>

<style scoped>
.hot-item {
  width: 100%;
  height: 434px;
  transition: all 0.3s ease;
  margin: 15px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 3px #00000036;
}
.hot-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 10px #00000036;
}
.hot-item img {
  width: 840px;
  height: 100%;
  float: left;
}
.hot-item .content {
  width: 360px;
  height: 100%;
  float: left;
  background-color: white;
}
.hot-item .content h1 {
  padding: 0px 50px;
  margin-top: 100px;
  font-weight: normal;
}
.hot-item .content h2 {
  padding: 15px 50px;
  font-weight: normal;
  color: #ff6700;
}
.hot-item .content p {
  font-size: 16px;
  font-weight: 300;
  padding: 15px 50px;
}
</style>
