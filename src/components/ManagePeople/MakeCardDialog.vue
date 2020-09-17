<template>
    <div class="make-card-dialog">
        <el-dialog :visible.sync="makeCardDialog" width="40%" @close="close">
            <el-steps :active="currentStep" align-center>
                <el-step title="卡片放入打印设备">
                </el-step>
                <el-step title="打印员工卡"></el-step>
                <el-step title="读取卡片信息"></el-step>
                <el-step title="写入员工信息"></el-step>
                <el-step title="制卡完成"></el-step>
            </el-steps>

            <div v-if="currentStep == 1" class="step-cla">
                <div class="step-one">
                    <img src="../../assets/frygk.png" alt="">
                    <p>请将员工卡片放入打印设备，进行打印...</p>
                    <div>
                        <el-button type="info" @click="$next(2)">下一步</el-button>
                        <el-button type="primary" @click="$next(3)">读取卡片信息</el-button>
                    </div>
                </div>
            </div>
            <div v-else-if="currentStep == 2" class="step-cla">
                <div class="step-two">
                    <div class="header">
                        <p>员工卡信息</p>
                    </div>
                    <div class="img">
                        <img :src="`api/${cardInfo.photo}`">
                    </div>
                    <div class="content">
                        <p><span>姓名:</span><span>{{cardInfo.name}}</span></p>
                        <p><span>部门:</span><span>{{cardInfo.deptName}}</span></p>
                    </div>
                    <div class="footer">
                        <el-button type="info" @click="printCard">打印</el-button>
                    </div>
                </div>
            </div>
            <div v-else-if="currentStep == 3" class="step-cla">
                <div class="step-three">
                    <img src="../../assets/jcygk.png">
                    <div>
                        <el-button type="primary" @click="getCardInfo">检测员工卡是否已放置</el-button>
                    </div>
                </div>
            </div>
            <div v-else-if="currentStep == 4" class="step-cla">
                <div class="step-four">
                    <div class="step-two">
                        <div class="header">
                            <p>当前员工卡信息</p>
                        </div>
                        <div class="img">
                            <img :src="`api${currentCardInfo.photo}`">
                        </div>
                        <div class="content">
                            <p><span>姓名:</span><span>{{currentCardInfo.name}}</span></p>
                            <p><span>部门:</span><span>{{currentCardInfo.deptName}}</span></p>
                        </div>
    
                    </div>
                    <div class="step-two">
                        <div class="header">
                            <p>待写入员工卡信息</p>
                        </div>
                        <div class="img">
                            <img :src="`api/${cardInfo.photo}`">
                        </div>
                        <div class="content">
                            <p><span>姓名:</span><span>{{cardInfo.name}}</span></p>
                            <p><span>部门:</span><span>{{cardInfo.deptName}}</span></p>
                        </div>
                    </div>
                </div>

                <div>
                    <el-button type="primary" @click="writeCardInfo">写入新信息</el-button>
                </div>
            </div>
            <div v-else class="step-cla">
                <div class="step-five">
                    <img src="../../assets/ygkzzwc.png" alt="">
                    <p>员工卡制卡成功</p>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1, // 当前步骤
            cardInfo: null, // 卡片信息
            currentCardInfo: null, // 当前卡信息
            makeCardDialog: false // 控制开关
        };
    },
    methods: {
        open(cardInfo) {
            this.makeCardDialog = true;
            this.cardInfo = cardInfo;
        },
        close() {
            this.currentStep = 1;
            this.cardInfo = null;
            this.currentCardInfo = null;
        },
        $next(num) {
            this.currentStep = num;
        },
        printCard() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            this.$message({
                message: '开始打印',
                type: 'success'
            });
            this.$axios({
              method: "get",
              url: `${this.api.printCard}/${this.cardInfo.id}`
            })
            .then((rsp) => {
                if(rsp.data.statusCode == 200) {
                    this.$message({
                        message: '打印成功',
                        type: 'success'
                    });
                    // this.$next(3);
                } else {
                    this.$message.error('打印失败')
                }
            })
            .catch((err) => {
                this.$message.error(err);
            })
            .finally(() => {
                loading.close()
            });
        },
        getCardInfo() {
            this.$axios({
              method: "get",
              url: this.api.getCardInfo
            })
            .then((rsp) => {
                if(rsp.data.statusCode == 200) {
                    let res = JSON.parse(rsp.data.data.split('@')[1]);
                    this.currentCardInfo = res;
                    this.$next(4);
                } else {
                    this.$message.error('读卡失败')
                }
            })
            .catch((err) => {
                this.$log(err);
                this.$message.error(err);
            });
        },
        writeCardInfo() {
            let sendData = {
                id: this.cardInfo.id,
                idCardNo: this.cardInfo.idCardNo,
                name: this.cardInfo.name,
                deptName: this.cardInfo.deptName,
                phone: this.cardInfo.phone,
                sex: this.cardInfo.sex,
                photo: this.cardInfo.photo
            };
            this.$axios({
              method: "post",
              url: this.api.setCardInfo,
              data: sendData
            })
            .then((rsp) => {
                if(rsp.data.statusCode == 200) {
                    this.$next(5);
                } else {
                    this.$message.error('写卡失败')
                }
            })
            .catch((err) => {
                this.$message.error(err)
            });
        },
    }
}
</script>

<style lang="less">
.make-card-dialog{
    width: 100%;

    .step-cla {
        width: 100%;
        height: 360px;
        margin-top: 30px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        .step-one{
            width: 310px;
            height: 100%;

            div {
                width: 100%;
                display: flex;
                justify-content: space-around;
            }

            p{
                text-align: center;
                color: #333;
                margin-top: 0;
            }
        }

        .step-two{
            width: 200px;
            height: 100%;
            position: relative;

            > div{
                width: 100%;
            }

            .header {
                height: 90px;
                border: 1px solid #e8e8e8;
                border-bottom: none;
                box-sizing: border-box;
                background: #0d8cfd;

                > p {
                    height: 40px;
                    color: #fff;
                    line-height: 40px;
                    text-align: center;
                }
            }

            .img {
                position: absolute;
                width: 70px;
                height: 90px;
                top: 54px;
                left: 36px;
                background: #fff;
                box-shadow: 2px 3px 5px #000;

                > img {
                    width: 100%;
                    height: 100%;
                }
            }
            
            .content {
                height: 190px;
                padding: 80px 0 40px 36px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                border: 1px solid #e8e8e8;
                border-top: none;
                box-sizing: border-box;


                > p {
                    margin: 0;
                }
            }

            .footer {
                margin: 20px 0 0 0;
                width: 100%;
                text-align: center;
            }
        }

        .step-three{
            width: 230px;
            height: 92%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            align-items: center;
        }

        .step-four{
            width: 480px;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
        }

        .step-five{
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>