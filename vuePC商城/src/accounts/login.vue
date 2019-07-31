<template>
  <div class="login-box">
    <div class="header">
      <div class="header-in">
        <div class="logo">OnlineShop</div>
        <ul>
          <li>
            <router-link to="/app/dzsb">返回商城</router-link>
          </li>
          <li>
            <a href="javascript:;">联系我们</a>
          </li>
          <li>
            <a href="javascript:;">提出意见</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="image">
      <img src="../../img/login.jpg" alt>
    </div>
    <div class="login">
      <H2>OnlineShop</H2>
      <label>
        账号:
        <input type="text" v-model="user">
      </label>
      <label>
        密码:
        <input type="password" v-model="psd">
      </label>
      <router-link :to="url" tag="button">
        <p @click="entryCheck">登入</p>
      </router-link>
      <router-link to="/shopping/register" tag="button">注册</router-link>
    </div>
    <div class="title">
      <h1>这是一个来自梦里的超级商城</h1>
      <h1>可以廉价购买你想要的一切</h1>
      <h2>代价：感情</h2>
    </div>
    <div class="footer">
      <div class="left">
        <p>联系电话：188-2888-9999</p>
        <p>e-mail:823550847@qq.com</p>
        <p>团队：Boom软创工作室</p>
        <p>介绍：前端用vue组件化开发的单页应用网站，后端ssm...我搞前端的不懂它</p>
      </div>
      <div class="right">
        <p>联系我们</p>
        <div class="weima">
          <img src="../../img/rwm1.jpg" alt="1">
          <img src="../../img/rwm1.jpg" alt="1">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      psd: "",
      url: ""
    };
  },
  methods: {
    // 请求服务器判断登入
    entryCheck: function() {
      if (this.user != "" && this.psd != "") {
        // this.axios.post("http://localhost:8080/api/v1/users", {
        //   account: this.user,
        //   password: this.psd
        // }),
        //   then(body => {
        //     if (body.status == 200) {
        //       // 将用户的user存入cookie中
        //       var date = new Date();
        //       var expiresDays = 1;
        //       date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
        //       document.cookie = "user=" + this.user +";psd="+this.psd+ ";expires=" + date.toGMTString();
        //       this.url = "/shopping/shopCart";
        //       this.$emit('getAccount',this.user,body.data.money);
        //       alert("登入成功");
        //     } else {
        //       alert("登入失败！");
        //     }
        //   });

        var date = new Date();
        var expiresDays = 1;
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
        document.cookie = "user=" + this.user +";psd="+this.psd+ ";expires=" + date.toGMTString();
        this.url = "/shopping/shopCart";
        this.$emit('getAccount',this.user);
         alert("登入成功");

         console.log('登入成功！');
        
      } else {
        this.url = "/shopping/login";
        alert("请输入账号和密码！");
      }
    }
  }
};
</script>
<style scoped>
.login-box {
  position: relative;
}
.login-box .header {
  width: 100%;
  height: 80px;
}
.login-box .image img {
  width: 100%;
  height: 650px;
  transition: all 5s ease;
  animation: identifier 14s ease infinite;
  animation-direction: alternate;
}
@keyframes identifier {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}
.header-in {
  width: 1200px;
  height: 100%;
  margin: 0px auto;
}
.header-in .logo {
  width: 180px;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  float: left;
}
.header ul {
  float: right;
  list-style: none;
  width: 300px;
  height: 100%;
}

.header li {
  width: 100px;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 80px;
}
.header a {
  text-decoration: none;
  color: black;
}
.login {
  position: absolute;
  width: 320px;
  height: 340px;
  background-color: rgba(255, 255, 255, 0.7);
  top: 200px;
  right: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.4);
}
.login h2 {
  padding: 15px 0px;
  text-align: center;
}

.login label {
  display: block;
  padding: 25px 11px;
  font-size: 17px;
  font-weight: bold;
}
.login input {
  font-size: 20px;
}
.login button {
  display: inline-block;
  margin-left: 40px;
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  font-size: 15px;
  background-color: #007bff;
  color: white;
  font-weight: normal;
}

.title {
  position: absolute;
  top: 300px;
  left: 250px;
  color: rgba(255, 255, 255, 0.9);
}

h1:nth-child(1) {
  font-size: 40px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.9);
}
h1:nth-child(2) {
  font-size: 30px;
  font-weight: normal;
  color: gold;
  margin-top: 40px;
}
.title h2 {
  margin-top: 40px;
  color: gold;
}
.footer {
  width: 1200px;
  height: 180px;
  margin: 0px auto;
}
.footer p {
  padding: 10px 5px;
  font-size: 15px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
}
.footer .left {
  width: 700px;
  float: left;
}

.footer .right {
  width: 500px;
  float: right;
}
.footer .right img {
  width: 140px;
  height: 140px;
  margin-left: 50px;
}
.image {
  overflow: hidden;
}
</style>
