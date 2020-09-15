<template>
  <div id="top">
    <el-col :style="note">
      <el-col :span="12">
        <img src="../../assets/logo.png" height="40" width="607" style="margin:6px" />
      </el-col>
      <el-col :span="12">
        <el-col :span="16" :offset="8">
          <el-col :span="5" :offset="2">
            <div class="topBtn" style="margin-left:50px;width:200px">
              <i class="iconfont icon-clock time"></i>
              <span>{{Datetime}}</span>
            </div>
          </el-col>
          <el-col :span="4" :offset="4">
            <div class="topBtn" style="margin-left:20px;width:160px">
              <div class="imgBox">
                <img
                  class="ph"
                  v-if="this.photo=='null'||this.photo=='string'"
                  src="../../assets/ph.png"
                />
                <img class="ph" v-else :src="this.photo" />
                <i
                  @click="openInfoModal"
                  class="el-icon-message-solid infoTips"
                  :class="haveingInfos?'activeInfoColor':'infoColor'"
                ></i>
              </div>
              <span style="text-indent:10px;">{{username}}</span>
            </div>
          </el-col>
          <el-col :span="3" :offset="2">
            <div class="topBtn cursor" @click="exit" style="background: #384e71;text-align:center">
              <i class="iconfont icon-tuichu" style="margin:auto"></i>
            </div>
          </el-col>
        </el-col>
      </el-col>
    </el-col>
    <el-dialog
      :visible.sync="centerDialogVisible"
      id="TopModal"
      :append-to-body="true"
      @close="offModal"
      width="45%"
      center
    >
      <div slot="title" class="modalTitle">
        <div class="left">
          <img src="../../assets/infos.png" alt width="25" />消息通知
        </div>
        <div style="border-bottom: 2px solid #2a4571;margin: 20px"></div>
      </div>
      <div>
        <div
          v-if="messageData.length>0"
          style="padding:0 40px 20px 40px;max-height:40vh;overflow: auto;"
        >
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item,idx) in messageData" :key="idx" :name="idx">
              <div slot="title" class="infosTitle">
                <div>
                  <p>{{item.title}}</p>
                </div>
                <p>{{item.createTime}}</p>
              </div>
              <div v-for="(e,i) in item.messageContent" :key="i" :style="i!=0?'text-indent:20px':''" style="margin-bottom:10px">{{e}}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div v-else class="noInfosTips">暂无消息</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      activeName: -1,
      //时间
      Datetime: "",
      //颜色选择器默认颜色
      bgColor: "#283f65",
      //页头颜色
      note: {
        backgroundColor: "#283f65"
      },
      haveingInfos: true,
      centerDialogVisible: false,
      messageData: []
    };
  },
  computed: {
    // 用户名
    username() {
      return 'test'
    },
    // 用户头像
    photo() {
      return '';
    }
  },
  methods: {
    // 退出登录，清空用户信息
    exit() {
      localStorage.clear();
      this.$router.push("/");
    },
    //查看信息
    openInfoModal() {
      this.centerDialogVisible = true;
    },
    //获取消息
    getMessages() {
      return
    },
    offModal() {
      this.haveingInfos = false;
    }
  },
  created() {
    this.getMessages();
    //定时获取时间，间隔1秒
    this.timer = setInterval(() => {
      this.Datetime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    }, 1000);
  },

  destroyed() {
    //组件销毁
    clearInterval(this.timer);
  }
};
</script>

<style lang="less">
#top {
  .el-dialog--center .el-dialog__body,
  .el-dialog__body {
    padding: 0 20px !important;
  }
  #TopModal {
    .el-dialog__body {
      padding: 0 !important;
    }
  }
}
</style>
<style scoped lang="less">
.topBtnColor {
  margin: 6px;
}

.time {
  margin-right: 5px;
}

.topBtn {
  text-align: center;
  height: 55px;
  color: #94a7c7;
  font-size: 16px;
  display: flex;
  align-items: center;
  .imgBox {
    position: relative;
  }
  .infoTips {
    position: absolute;
    font-size: 18px;
    right: -4px;
    bottom: -16px;
    cursor: pointer;
  }
  i {
    font-size: 28px;
    line-height: 55px;
  }
  .infoColor {
    color: #fff;
  }
  .activeInfoColor {
    color: red;
  }

  .ph {
    width: 45px;
    height: 45px;
    margin-top: 5px;
    border-radius: 30px;
  }
}
.toERP {
  width: 158px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  text-indent: 10px;
  height: 56px;
  line-height: 56px;
  background: #394c74;
}
.modalTitle {
  text-align: left;
  .left {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
  }
}
.noInfosTips {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 40px;
}
.infosTitle {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>