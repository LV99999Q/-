<template>
    <div class="edit-personnel-cla">
        <el-form
            label-position="right"
            label-width="100px"
            ref="personnelRef"
            :model="personnelData"
            :inline="true"
            :rules="personnelRules">
            <div class="person flex border-b">
                <div class="person-info border-r">
                    <p>个人信息</p>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="personnelData.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="personnelData.sex">
                            <el-radio
                                v-for="item in personOptions.sexs"
                                :key="item.value"
                                :label="item.value">
                                {{item.label}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="personnelData.phone"  placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="政治面貌">
                        <el-select v-model="personnelData.sociRole" placeholder="请选择政治面貌">
                            <el-option 
                                v-for="item in personOptions.sociRoles"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="家庭住址">
                        <el-input v-model="personnelData.address"  placeholder="请输入家庭住址"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="idCardNo">
                        <el-input v-model="personnelData.idCardNo"  placeholder="请输入身份证号"></el-input>
                    </el-form-item>

                    </br>

                    <el-form-item label="身份证正面">
                        <el-upload
                            :show-file-list="false"
                            :action="this.api.getUpload"
                            :http-request="file => {this.uploadRequest('idCardImg1', file)}">
                            <img v-if="personnelData.idCardImg1" width="200" height="126" :alt="`api${personnelData.idCardImg1}`" :src="`api${personnelData.idCardImg1}`">
                            <img v-else src="../../assets/sfz-z.png" width="200" height="126" >
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="身份证背面">
                        <el-upload
                            :show-file-list="false"
                            :action="this.api.getUpload"
                            :http-request="file => {this.uploadRequest('idCardImg2', file)}">
                            <img v-if="personnelData.idCardImg2" width="200" height="126"  :alt="`api${personnelData.idCardImg2}`" :src="`api${personnelData.idCardImg2}`">
                            <img v-else src="../../assets/sfz-b.png" width="200" height="126" >
                        </el-upload>
                    </el-form-item>
                </div>

                <div class="person-img flex">
                    <el-upload
                        class="upload"
                        :show-file-list="false"
                        :action="this.api.getUpload"
                        :http-request="file => {this.uploadRequest('photo', file)}">
                        <img v-if="personnelData.photo" :src="personnelData.photo">
                        <div v-else>
                            <p><img src="../../assets/camera.png"></p>
                            <p><span>上传照片</span></p>
                        </div>
                    </el-upload>
                </div>
            </div>


            <div class="person">
                <p>岗位信息</p>
                <el-form-item label="账号" prop="acount">
                    <el-input v-model="personnelData.acount"  placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="personnelData.password"  placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="进厂日期">
                    <el-date-picker
                        v-model="personnelData.inYardTime"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="请选择进厂日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="离岗日期">
                    <el-date-picker
                        v-model="personnelData.offDutyTime"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="请选择离岗日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="personnelData.deptId" placeholder="请选择部门">
                        <el-option 
                            v-for="item in personOptions.depts"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="岗位" prop="userType">
                    <el-select v-model="personnelData.userType" placeholder="请选择岗位">
                        <el-option 
                            v-for="item in personOptions.userTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用工性质">
                    <el-select v-model="personnelData.userType" placeholder="请选择用工性质">
                        <el-option 
                            v-for="item in personOptions.userTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="备注">
                    <el-input type="textarea" v-model="personnelData.remark"  placeholder="请输入备注"></el-input>
                </el-form-item>
            </div>

            <div class="buttons">
                <el-form-item>
                    <el-button type="primary" @click="editSubmit">提交</el-button>
                    <el-button @click="returnManage">返回</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>


<script>
export default {
    data() {
        const validate = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入'));
            } else {
                if(rule.rule.test(value))  {
                    callback();
                }else {
                    callback(new Error(`${rule.errMsg}`));
                }
            }
        };
        const validateNum = (rule, value, callback) => {
            if (!(String(value))) {
                callback(new Error('请选择'));
            } else {
                if(rule.rule.test(value))  {
                    callback();
                }else {
                    callback(new Error(`${rule.errMsg}`));
                }
            }
        };
        const validatePhone = (rule, value, callback) => {
            if(!value || rule.rule.test(value))  {
                callback();
            } else {
                callback(new Error(`${rule.errMsg}`));
            }
        };
        return {
            personnelData: {},  // 表单数据集合
            personOptions: {
                sexs: [
                    {label: '男', value: '男'},
                    {label: '女', value: '女'}
                ],
                sociRoles: [
                    {label: '群众', value: '群众'},
                    {label: '团员', value: '团员'},
                    {label: '党员', value: '党员'}
                ],
                userTypes: [
                    { label: "施工人员", value: 0 },
                    { label: "管理人员", value: 1 },
                    { label: "监理", value: 2 }
                ],
                depts: []
            }, // 表单下拉对象集合
            fileLoad: {}, // 表单上传文件名称集合
            personnelRules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                idCardNo: [
                    {  required: true, validator: validate, trigger: 'blur', rule: new RegExp(/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/), errMsg: '请输入正确的身份证号'}
                ],
                acount: [
                    {  required: true, validator: validate, trigger: 'blur', rule: new RegExp(/^[A-Za-z0-9]+$/), errMsg: '账号由数字，字母或数字加字母组成'}
                ],
                password: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                userType: [
                    {  required: true, validator: validateNum, trigger: 'blur', rule: new RegExp(/^[0-9]*$/), errMsg: '请选择岗位'}
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur', rule: new RegExp(/^1\d{10}$/), errMsg: '请输入正确格式的电话号码'}
                ]
            }, // 表单验证规则集合
        }
    },
    computed: {
        // 证书对象
        certificatesOBJ() {
            return Object.assign({name: '', expTime: '', url: ''});
        }
    },
    created() {
        this.initPersonnelData();
        this.getAllDepts();
    },
    beforeDestroy() {
        this.personnelData = {};
    },
    methods: {
        // 初始化人员信息
        initPersonnelData() {
            let obj2 = {},
                obj = {
                    name: '',
                    sex: '男',
                    birthday: '',
                    phone: '',
                    sociRole: '',
                    address: '',
                    idCardNo: '',
                    idCardImg1: '',
                    idCardImg2: '',
                    photo: '',
                    acount: '',
                    password: '',
                    inYardTime: '',
                    offDutyTime: '',
                    userType: '',
                    deptId: '',
                    remark: ''
                };
            this.$axios({
                method: "get",
                url: `${this.api.getUserDetail}?userId=${localStorage.getItem("userInfoId")}`,
            }).then(res => {
                obj2 = res.data.data;
                this.personnelData = Object.assign({}, obj, obj2);
            })
        },
        // 获取全部部门
        getAllDepts() {
            this.$axios({
                method: "get",
                url: this.api.getGroups
            }).then(res => {
                this.personOptions.depts = res.data.data.map(e => {
                    return {
                        label: e.name,
                        value: e.id
                    }
                });
            })
        },
        // 上传照片方法
        uploadRequest(NAME, file, formDataKey = 'multipartFiles') {
            let fileType = ['image/png', 'image/jpeg', 'image/jpg'];
            fileType.includes(file.file.type) ?
            this.$AjaxUpLoader(NAME, file, formDataKey) :
            this.$message.error(`只能上传${fileType.map(e => e.split('/')[1]).join('、')}的格式文件`);
        },
        //  上传成功回调
        uploadSuccess(NAME, res) {
            const [NAMEkey] = NAME.split('-');
            switch(NAMEkey) {
                case 'idCardImg1':
                case 'idCardImg2':
                case 'photo':
                    this.personnelData[NAMEkey] = res;
                    break;
            }
        },
        $AjaxUpLoader(NAME, file, formDataKey) {
            const formData = new FormData(),
                    xhr = new XMLHttpRequest(),
                    that = this;

            formData.append(formDataKey, file.file);
            xhr.open("POST", file.action, true);
            xhr.send(formData);
            xhr.onload = () => {
                if(xhr.status === 200 || xhr.status === 304) {
                    that.uploadSuccess(NAME, JSON.parse(xhr.response)[0])
                } else {
                    this.$message.error(`文件上传错误`);
                    this.$log(`error：error code ${xhr.status}`);
                }
            }
        },
        // 新增提交
        editSubmit() {
            this.$refs['personnelRef'].validate((valid) => {
                if (valid) {
                    this.$axios({
                        method: "post",
                        url: this.api.getSaveUser,
                        data: Object.assign({id: localStorage.getItem("userInfoId")}, this.personnelData)
                    }).then(res => {
                        if (res.data.statusCode == 200) {
                            this.$message({
                                message: "修改成功",
                                type: "success"
                            });
                        } else if (res.data.statusCode == 500) {
                            this.$message({
                                message: res.data.message,
                                type: "info"
                            });
                        }
                    }).catch(err => {
                        this.$message.error(err);
                    }).finally(() => {
                        this.returnManage()
                    })
                }
            });
        },
        // 返回管理页
        returnManage() {
            this.$emit('closeDialog');
        },
    }
}
</script>


<style lang='less' scoped>
.person {
    .el-radio-group, .el-input, .el-select, .el-button {
       width: 200px;
    }
    .el-textarea{
       width: 60em;
    }
    .el-button{
       color: #547ecc;
       background: #f4f4f4;
       border: 0;
    }
}
.border-b {
    border-bottom: 1px solid #e7e7e7;
}
.border-r{
    border-right: 1px solid #e7e7e7;
}
</style>

<style lang='less'>
.edit-personnel-cla{
    width: 100%;
    background: #ffffff;
    font-family: "MicrosoftYaHei";
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    
    .flex{
        display: flex;
        flex-flow: row nowrap;
    };

    .person{
        width: 100%;
        padding: 20px 0 0 40px;
        box-sizing: border-box;

        > .person-info {
            width: 85%;
            box-sizing: border-box;
        }

        > .person-img {
            width: 15%;
            justify-content: center;
            align-items: center;

            .upload {
                width: 100px;
                height: 140px;
                background: #f4f4f4;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .buttons{
        width: 100%;
        text-align: center;
    }
}
</style>