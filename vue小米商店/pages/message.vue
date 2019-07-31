<template>
  <div class="message-box">
    <div class="header">
      <h2>消息</h2>
      <p>
        <mt-badge size="normal" type="error">40</mt-badge>条未读消息
      </p>
      <div class="sort">
        <div class="teacher">
          <img src="../static/img/801073.png" alt>
          <p>商家客服</p>
        </div>
        <div class="business">
          <img src="../static/img/1742842.png" alt>
          <p>企业机构</p>
        </div>
        <div class="other">
          <img src="../static/img/1742829.png" alt>
          <p>全部消息</p>
        </div>
      </div>
    </div>
    <transition-group tag="div" appear mode="out-in" name="chat">
      <chatItem v-for="n in 4" :key="n"></chatItem>
    </transition-group>
  </div>
</template>
<script>
import chatItem from '../components/chatItem.vue'
export default {
    components:{
        chatItem
    }
};
</script>
<style scoped>
.chat-enter,
.chat-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.chat-enter-active,
.chat-leave-active{
  transition: all 0.3s ease;
}

.message-box {
  width: 100%;
  padding-bottom: 55px;
}
.message-box .header {
  width: 100%;
  height: 150px;
  background-color: #67c23a;
  margin-bottom: 60px;
}
.message-box .header h2 {
  padding: 10px 10px;
  font-size: 24px;
  letter-spacing: 5px;
  color: white;
  font-weight: normal;
}
.message-box .header > p {
  padding: 10px 10px;
  font-size: 15px;
  color: white;
  letter-spacing: 2px;
  font-weight: 200;
}
.message-box .header .sort {
  position: flex;
  margin: 5px 15px;
  background-color: white;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0px 1px 1px 0px #9a949433;
}
.message-box .header .sort div {
  float: left;
  width: 33.3%;
  height: 100%;
  text-align: center;
}
.message-box .header .sort div img {
  margin-top: 10px;
  width: 60px;
  height: 60px;
}
.message-box .header .sort div p {
  font-size: 14px;
}
</style>