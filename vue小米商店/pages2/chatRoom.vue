<template>
  <div class="chat-room">
    <mt-header fixed title="何雷老师">
      <router-link to="/message" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="chatBottom">
      <input type="text" v-model="value">
      <input type="button" value="发送" @click="send">
    </div>
    <chatTalk></chatTalk>
    <chatTalk></chatTalk>
    <chatTalk2 v-for="(value,i) in talkList" :key="i" :value="value"></chatTalk2>
  </div>
</template>
<script>
import chatTalk from "../components/chatTalk.vue";
import chatTalk2 from "../components/chatTalk2.vue";
export default {
  data() {
    return {
      value: "",
      talkList: []
    };
  },
  methods: {
    send: function() {
      this.talkList.push(this.value);
      this.value = "";
    }
  },
  components: {
    chatTalk,
    chatTalk2
  }
};
</script>

<style scoped>
.mint-header {
  background-color: white;
  color: #67c23a;
}
a {
  text-decoration: none;
}
.chat-room {
  width: 100%;
  padding-top: 48px;
  padding-bottom: 100px;
}
.chatBottom {
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 56px;
  background-color: white;
}
.chatBottom input:nth-child(1) {
  font-size: 18px;
  width: 70%;
  margin-left: 5%;
  margin-top: 10px;
}
.chatBottom input:nth-child(2) {
  font-size: 14px;
  width: 20%;
  height: 26px;
  background-color: #67c23a;
  color: white;
  border: none;
  outline: none;
  border-radius: 3px;
}
</style>
