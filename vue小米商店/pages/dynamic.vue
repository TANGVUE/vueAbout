<template>
  <div class="dynamic-box">
    <mt-header fixed title="相关动态"></mt-header>
    <div class="follow-btn">
        <div class="tuisong">
            <span class="iconfont icon-tuisongshezhi"></span>
            <span>推送</span>
        </div>
        <div class="xiangguan">
            <span class="iconfont icon-guanzhu"></span>
            <span>相关</span>
        </div>
    </div>
    <dynamicItem></dynamicItem>
    <dynamicItem></dynamicItem>
    <dynamicItem></dynamicItem>
    <dynamicItem></dynamicItem>
  </div>
</template>
<script>
import dynamicItem from "../components/dynamicItem.vue";
export default {
  components: {
    dynamicItem
  }
};
</script>
<style scoped>
.mint-header {
  color: #67C23A;
  background-color: white;
  box-shadow: 0px 1px 1px 0px #9a949433;
}
.dynamic-box {
  padding-top: 48px;
  padding-bottom: 55px;
}
.follow-btn{
    width: 100%;
    height: 40px;
    background-color: white;
    margin-bottom: 7px;
    font-weight: normal;
    font-size: 16px;
}
.follow-btn .tuisong{
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid #d6d1d15e;
    box-sizing: border-box;
}
.follow-btn .xiangguan{
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
     line-height: 40px;
}
.iconfont{
    font-size: 18px;
}
</style>
