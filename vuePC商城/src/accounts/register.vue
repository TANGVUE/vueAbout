<template>
  <div class="warp">
    <div class="header">
      <transition appear>
        <h1 key="h1">
          “您将成为这个梦幻国度的一员，准备了好吗？”
          <br>“Are you ready?”
        </h1>
      </transition>
      <img src="../../img/register.jpg" alt="1">
    </div>
    <div class="register-box">
      <h1>OnlineShop注册</h1>
      <label>
        用户名：
        <input type="text" v-model="user" @focus="flag=!flag" @blur="flag=!flag,userCheck()">
      </label>
      <div class="err">{{userErr}}</div>
      <label>
        密码：
        <input
          type="password"
          style="margin-left:18px"
          v-model="psd"
          @focus="flag1=!flag1"
          @blur="flag1=!flag1,passwordCheck()"
        >
      </label>
      <div class="err">{{psdErr}}</div>
      <label>
        确认：
        <input
          type="password"
          style="margin-left:18px"
          v-model="psd1"
          @focus="flag1=!flag1"
          @blur="flag1=!flag1,againCheck()"
        >
      </label>
      <div class="err">{{psd1Err}}</div>
      <label>
        手机号：
        <input
          type="text"
          v-model="phone"
          @focus="flag2=!flag2"
          @blur="flag2=!flag2,phoneCheck()"
        >
      </label>
      <div class="err">{{phoneErr}}</div>
      <label>
        邮箱号：
        <input type="text" v-model="email">
      </label>
      <div class="err"></div>
      <router-link :to="url" tag="button" class="btn">
        <span @click="registerCheck">立即注册</span>
      </router-link>
      <div class="tips">
        <div v-if="flag" key="1">
          <p>1.输入用户名，用于以后登入的账号</p>
          <p>2.只能输入5至20个字符</p>
          <p>3.必须以字母开头、可带数字、“_”、“.”</p>
        </div>
        <div v-else-if="flag1" key="2">
          <p>1.输入密码，用于以后账号验证</p>
          <p>2.只能输入6-20个字母、数字、下划线</p>
        </div>
        <div v-else-if="flag2" key="3">
          <p>1.输入本人手机号，用于以后账号的找回，订单查收</p>
          <p>2.只能输入国内的号码</p>
        </div>
      </div>
    </div>
    <div class="logo">
      <router-link to="/app/dzsb" tag="a">OnlineShop</router-link>
    </div>
    <div class="footer">Boom软创工作室版权所有</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: "",
      psd: "",
      psd1: "",
      phone: "",
      flag: false,
      flag1: false,
      flag2: false,
      check: false,
      check1: false,
      check2: false,
      check3: false,
      url: "",
      userErr: "",
      psdErr: "",
      psd1Err: "",
      phoneErr: "",
      email: ""
    };
  },
  methods: {
    userCheck: function() {
      var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
      var s = this.user;
      if (!patrn.exec(s)) {
        console.log(false);
        this.check = false;
        if (s.length == 0) {
          this.userErr = "账号不能为空";
        } else {
          this.userErr = "不符合要求";
        }
        // 数据库已存在同名
      } else {
        console.log(true);
        this.check = true;
        this.userErr = "";
      }
    },
    passwordCheck: function() {
      var patrn = /^(\w){6,20}$/;
      var s = this.psd;
      if (!patrn.exec(s)) {
        console.log(false);
        this.check1 = false;
        if (s.length == 0) {
          this.psdErr = "密码不能为空";
        } else {
          this.psdErr = "不符合要求";
        }
      } else {
        console.log(true);
        this.check1 = true;
        this.psdErr = "";
      }
    },
    phoneCheck: function() {
      var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})$/;
      var s = this.phone;
      if (!patrn.exec(s)) {
        console.log("false");
        this.check2 = false;
        if (s.length == 0) {
          this.phoneErr = "号码不能为空";
        } else {
          this.phoneErr = "不符合要求";
        }
      } else {
        console.log("true");
        this.check2 = true;
        this.phoneErr = "";
      }
    },
    againCheck: function() {
      var s = this.psd1;
      if (this.psd === this.psd1) {
        console.log("再次确认正确！");
        this.check3 = true;
        this.psd1Err = "";
      } else {
        this.check3 = false;
        if (s.length == 0) {
          this.psd1Err = "不能为空";
        } else {
          this.psd1Err = "密码输入不相同";
        }
      }
    },
    registerCheck: function() {
      if (
        this.check == true &&
        this.check1 == true &&
        this.check2 == true &&
        this.check3 == true
      ) {
        alert("注册中···");
        this.axios
          .post("http://localhost:8080/api/v1/users/save", {
            username: this.user, //用户名称, 必填
            account: this.user, // 账号, //必填
            password: this.psd, //密码, 必填
            phone: this.phone, // 电话号码, 必填
            email: this.email // 邮箱， 必填
          })
          .then(body => {
            if (body.status == 200) {
              alert("注册成功！");
              this.url = "/shopping/login";
            }else if(body.status == 500 ){
              alert("该用户名已被占用");
              this.url = "/shopping/register";
            }else{
              alert("注册未响应！");
            }
          })
          .catch(function(err){
            alert("注册未响应！");
          });
      } else {
        alert("请按规则填写");
        this.check = this.check1 = this.check2 = this.check3 = false;
        this.user = this.psd = this.psd1 = this.phone = "";
        this.userErr = this.psdErr = this.psd1Err = this.phoneErr = "";
        this.email="";
        this.url = "/shopping/register";
      }
    }
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1.5s ease;
}
.warp {
  position: relative;
  background-color: white;
}

.header {
  width: 100%;
}
.header img {
  width: 100%;
  height: 500px;
}
.header h1 {
  position: absolute;
  top: 150px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 50px;
  font-weight: normal;
}
.register-box {
  width: 1200px;
  height: 500px;
  margin: 0px auto;
  position: relative;
}
.register-box h1 {
  font-size: 45px;
  font-weight: normal;
  padding: 5px 15px;
}

.register-box label {
  display: block;
  font-size: 18px;
  padding: 0px 15px;
  font-weight: bold;
}
.register-box label input {
  font-size: 25px;
}
.btn {
  width: 318px;
  height: 50px;
  font-size: 18px;
  margin-left: 91px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #3580eb;
  color: white;
}
.btn span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
}
.tips {
  width: 350px;
  height: 200px;
  position: absolute;
  top: 60px;
  right: 180px;
}
.tips p {
  padding: 15px 0px;
  font-size: 17px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.7);
}
.logo {
  position: absolute;
  width: 180px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  top: 15px;
  left: 15px;
  font-size: 30px;
  font-weight: normal;
}
.logo a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
}
.footer {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
  font-weight: normal;
  background-color: #f5f5f5;
}
.err {
  width: 318px;
  height: 30px;
  color: #ff5b5b;
  font-size: 16px;
  margin-left: 92px;
  line-height: 30px;
}
</style>