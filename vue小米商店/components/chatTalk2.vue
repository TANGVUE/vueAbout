<template>
  <div class="talk">
    <div class="head">
      <img src="../static/img/1742829.png" alt>
    </div>
    <div class="messages">
      <p>{{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:["value"]
};
</script>
<style scoped>
.talk {
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
}
.talk .head {
  float: right;
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
.talk .head img {
  width: 100%;
  height: 100%;
}
.talk .messages {
  max-width: 68%;
  float: right;
  font-size: 16px;
  margin-right: 12px;
  padding: 13px 10px;
  background-color: white;
  border-radius: 5px;
  font-weight: normal;
}
</style>
