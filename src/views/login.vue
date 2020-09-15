<template>
  <div id="login">
    <div id="wrap" :style="note">
      <div id="mainer">
        <img src="../assets/cp-01.png" height="70" width="1114" />
        <div id="login_form">
          <div id="form_box">
            <div>
              <p style="margin-bottom: 10px">登录账号</p>
              <el-input placeholder="请输入账号" clearable v-model="username">
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
              </el-input>
            </div>
            <div>
              <p style="margin-bottom: 10px">登录密码</p>
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="pwd"
                @keyup.enter.native="handleLogin"
              >
                <i slot="prefix" class="el-input__icon el-icon-key"></i>
              </el-input>
            </div>
            <div style="height: 40px;line-height: 40px">
              <el-checkbox v-model="checked">
                <p>记住密码</p>
              </el-checkbox>
              <!--<p style="font-size: 14px;float: right;cursor: pointer" @click="clearCookie">忘记密码</p>-->
            </div>
            <p id="alertMsg">{{alertMsg}}</p>
            <div>
              <el-button
                type="primary"
                style="background: #409eff;width:100%;height: 40px;line-height:18px;font-size: 24px;border: 0"
                @click="handleLogin"
              >登&nbsp;&nbsp;录</el-button>
            </div>
          </div>
        </div>
      </div>
      <img id="support" src="../assets/ohoyee.png" height="37" width="394" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      checked: true,
      username: "",
      pwd: "",
      alertMsg: "",
      note: {
        backgroundImage: "url(" + require("../assets/bg.png") + ")",
        backgroundRepeat: "no-repeat"
      }
    };
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    checkOut(rno) {
            // this.$router.push("/");

      this.$axios
        .get(this.api.checkout + "?rno=" + rno)
        .then(rsp => {
        })
        .catch(err => {
          this.$message.warning(err.response.data.message);
        });
    },
    // 设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    // 保存cookie
    submitForm() {
      const self = this;
      //判断复选框是否被勾选，勾选则调用配置cookie方法
      if (self.checked == true) {
        // this.$log('checked==true');
        // 传入账号，密码，和保存天数3个对象
        self.setCookie(this.username, this.pwd, 7);
      } else {
        // this.$log('清空Cookie');
        self.clearCookie();
      }
    },
    // 读取cookie
    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割
        // console.log(document.cookie)
        // 注意：这里打印的cookie字符串，分号后面会加上一个空格，所以切割的时候要加上空格
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          // console.log(arr2)
          // 判断查找相对应的值
          if (arr2[0] == "userName") {
            this.username = arr2[1]; //保存到数据的地方
          } else if (arr2[0] == "userPwd") {
            this.pwd = arr2[1];
          }
        }
      }
    },
    // 清除cookie
    clearCookie() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1就好了
    },
    //登录
    handleLogin() {
      this.submitForm();
      if (this.username !== "" && this.pwd !== "") {
        this.$axios({
          method: "post",
          url: this.api.dengLu,
          data: {
            acount: this.username,
            password: this.pwd
          }
        })
          .then(resp => {
            if (resp.data.statusCode == 200) {
              this.$router.push("/Home/ComponentBase");
            } else {
              this.alertMsg = resp.data.message;
            }
          })
          .catch(err => {
            this.alertMsg = err.response.data.message;
          });
      }
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

img {
  border: 0;
  vertical-align: middle;
}

#wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
}

#mainer {
  width: 1120px;
  height: 710px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#login_form {
  background: rgba(18, 23, 37, 0.32);
  width: 470px;
  height: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#form_box {
  margin: 10%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: #6176a4;
  }

  #alertMsg {
    text-align: center;
    color: red;
    position: absolute;
    bottom: 220px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

#support {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: auto;
}
</style>