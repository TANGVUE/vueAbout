<template>
  <router-link class="business-box" tag="div" :to="url">
    <div class="image">
      <img :src="obj.url" alt>
    </div>
    <div class="introduce">
      <h2>{{obj.name}}</h2>
      <p>类型：{{obj.type}}</p>
      <p>{{obj.introduce}}</p>
    </div>
    <div class="apprise">
      <p>价格</p>
      <div>{{obj.money}}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      url:'/show/'
    }
  },
  created:function(){
    this.url= this.url + this.obj.id;
  },
  props:["obj"]
};
</script>
<style scoped>
.business-box {
  width: 100%;
  height: 100px;
  background-color: white;
  margin-bottom: 7px;
  box-shadow: 0px 1px 1px 0px #9a949433;
}
.business-box .image {
  float: left;
  width: 100px;
  height: 100%;
}
.business-box .image img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 10px;
}
.business-box .introduce {
  width: 120px;
  height: 100%;
  float: left;
}
.business-box .introduce h2{
    font-size: 18px;
    color: #3c3a3a;
    font-weight: bold;
    padding: 9px 0px;
}
.business-box .introduce p{
  font-size: 14px;
  color: #7d7d7dde;
}
.business-box .apprise {
  float: right;
  width: 100px;
  height: 100%;
  color: #f7891d;
  text-align: center;
}
.business-box .apprise p{
  margin-top: 15px;
}
.business-box .apprise div{
  font-size: 20px;
  margin-top: 8px;

}
</style>
