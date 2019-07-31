<template>
  <div class="talk">
    <div class="head">
      <img src="../static/img/801073.png" alt>
    </div>
    <div class="messages">
      <p>{{messages}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages:
        "这是最新的消息，有什么问题可以咨询我哦！"
    };
  }
};
</script>
<style scoped>
.talk {
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
}
.talk .head {
  float: left;
  width: 50px;
  height: 50px;
  margin-left: 5px;
}
.talk .head img {
  width: 100%;
  height: 100%;
}
.talk .messages {
  max-width: 68%;
  float: left;
  font-size: 16px;
  margin-left: 12px;
  padding: 13px 10px;
  background-color: white;
  border-radius: 5px;
  font-weight: normal;
}
</style>
