<template>
  <div class="footerPlugin">
    <router-link class="item-tabel" tag="a" to="/home">
      <span class="iconfont icon-home"></span>
      <span>首页</span>
    </router-link>
    <router-link class="item-tabel"  tag="a" to="/search">
      <span class="iconfont icon-icon-test1"></span>
      <span>搜索</span>
    </router-link>
    <router-link class="item-tabel"  tag="a" to="/message">
      <span class="iconfont icon-iconfontzhizuobiaozhun023110"></span>
      <span>消息</span>
    </router-link>
    <router-link class="item-tabel"  tag="a" to="/dynamic">
      <span class="iconfont icon-dongtai"></span>
      <span>动态</span>
    </router-link>
    <router-link class="item-tabel"  tag="a" to="/personal">
      <span class="iconfont icon-geren1"></span>
      <span>账户</span>
    </router-link>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footerPlugin{
  position: fixed;
  display:flex;
  width: 100%;
  height:55px;
  bottom: 0px;
  left: 0px;
  background-color: white;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
}
.footerPlugin a{
  display:block;
  padding: 5px 0px;
  width: 20%;
  text-align: center;
  text-decoration: none;
  color: black;
}
.footerPlugin a span{
  display: block;
}
.iconfont{
  font-size: 26px;
}
span:nth-child(2){
  font-size: 12px;
}

.item-active{
  color: #67C23A !important;
}

</style>
