<template>
    <div class="add-personnel-cla">
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
                    <el-form-item label="出生日期">
                        <el-date-picker
                            v-model="personnelData.birthday"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择出生日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="工号">
                        <el-input v-model="personnelData.employeeNo"  placeholder="请输入工号"></el-input>
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
                    <el-form-item label="紧急联系人">
                        <el-input v-model="personnelData.emergPeople"  placeholder="请输入紧急联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="emergPhone">
                        <el-input v-model="personnelData.emergPhone"  placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="入职体检">
                        <el-date-picker
                            v-model="personnelData.entryPhysica1Time"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择入职体检日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="在岗体检">
                        <el-date-picker
                            v-model="personnelData.onDutyPhysica1Time"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择在岗体检日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="离岗体检">
                        <el-date-picker
                            v-model="personnelData.offDutyPhysica1Time"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择离岗体检日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="家庭住址">
                        <el-input v-model="personnelData.address"  placeholder="请输入家庭住址"></el-input>
                    </el-form-item>

                    </br>

                    <el-form-item label="入职体检报告">
                        <el-upload
                            :show-file-list="false"
                            :action="this.api.getUpload"
                            :http-request="file => {this.uploadRequest('entryPhysicalExam', file)}">
                            <el-button>{{ fileLoad.entryPhysicalExam }}</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="在岗体检报告">
                        <el-upload
                            :show-file-list="false"
                            :action="this.api.getUpload"
                            :http-request="file => {this.uploadRequest('onDutyPhysicalExam', file)}">
                            <el-button>{{ fileLoad.onDutyPhysicalExam }}</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="离职体检报告">
                        <el-upload
                            :show-file-list="false"
                            :action="this.api.getUpload"
                            :http-request="file => {this.uploadRequest('offDutyPhysicalExam', file)}">
                            <el-button>{{ fileLoad.offDutyPhysicalExam }}</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="选择角色">
                        <el-select v-model="personnelData.level" placeholder="请选择角色">
                            <el-option 
                                v-for="item in personOptions.levels"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    </br>

                    <el-form-item label="身份证号" prop="idCardNo">
                        <el-input v-model="personnelData.idCardNo"  placeholder="请输入身份证号"></el-input>
                    </el-form-item>
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


            <div class="flex person">
                <div class="person-info">
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
                    <el-form-item label="岗位状态" prop="jobStatus">
                        <el-select v-model="personnelData.jobStatus" placeholder="请选择岗位状态">
                            <el-option 
                                v-for="item in personOptions.jobStatus"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="工种" prop="userType">
                        <el-select v-model="personnelData.userType" placeholder="请选择工种">
                            <el-option 
                                v-for="item in personOptions.userTypes"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属部门">
                        <el-select v-model="personnelData.deptId" placeholder="请选择所属部门">
                            <el-option 
                                v-for="item in personOptions.depts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
               </div>
            </div>

            <div class="person">
                <p>入职资料</p>
                <el-form-item label="劳务公司">
                    <el-input v-model="personnelData.laborCompany"  placeholder="请输入劳务公司"></el-input>
                </el-form-item>
                <el-form-item label="劳务合同">
                    <el-upload
                        :show-file-list="false"
                        :action="this.api.getUpload"
                        :http-request="file => {this.uploadRequest('laborContractImg', file)}">
                        <el-button>{{ fileLoad.laborContractImg }}</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="社保到期">
                    <el-date-picker
                            v-model="personnelData.socialSecurityEndTime"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择社保到期日期">
                        </el-date-picker>
                </el-form-item>
                <el-form-item label="社保缴纳">
                    <el-date-picker
                            v-model="personnelData.socialSecurityBeginTime"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择社保缴纳日期">
                        </el-date-picker>
                </el-form-item>
                <el-form-item label="社保明细">
                    <el-upload
                        :show-file-list="false"
                        :action="this.api.getUpload"
                        :http-request="file => {this.uploadRequest('socialSecurityImg', file)}">
                        <el-button>{{ fileLoad.socialSecurityImg }}</el-button>
                    </el-upload>
                </el-form-item>

                </br>

                <el-form-item label="备注">
                    <el-input type="textarea" v-model="personnelData.remark"  placeholder="请输入备注"></el-input>
                </el-form-item>

                </br>

                <el-form-item label="有无证书">
                    <el-switch
                        v-model="personnelData.haveWorkCertificate"
                        @change="credentialsChange"
                        active-text="有"
                        inactive-text="无">
                    </el-switch>
                </el-form-item>
                <div v-if="personnelData.haveWorkCertificate">
                    <p v-for="(item, index) in personnelData.certificates" :key="item.key">
                        <el-form-item label="证书">
                            <el-input v-model="item.name" placeholder="请输入证书"></el-input>
                        </el-form-item>
                        <el-form-item label="到期时间">
                            <el-date-picker
                                v-model="item.expTime"
                                value-format="yyyy-MM-dd"
                                type="date"
                                placeholder="请选择到期时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="证书上传">
                            <el-upload
                                :show-file-list="false"
                                :action="api.getUpload"
                                :http-request="file => {
                                        uploadRequest(`certificates-${index}`, file)
                                    }
                                ">
                                <el-button>{{ fileLoad.certificates[index].name }}</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-button v-if="index == 0" icon="el-icon-circle-plus-outline" type="text" @click="addCertificates">新增</el-button>
                        <el-button v-else icon="el-icon-remove-outline" type="text" @click="delCertificates(index)">删除</el-button>
                    </p>
                </div>
            </div>

            <div class="buttons">
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="addSubmit">提交</el-button>
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
                levels: [
                    { label: "一级权限", value: 1 },
                    { label: "二级权限", value: 2 },
                    { label: "三级权限", value: 3 },
                    { label: "四级权限", value: 4 }
                ],
                jobStatus: [
                    { label: "离职", value: 0 },
                    { label: "在职", value: 1 }
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
                jobStatus: [
                    {  required: true, validator: validateNum, trigger: 'blur', rule: new RegExp(/^[0-9]*$/), errMsg: '请选择岗位状态'}
                ],
                userType: [
                    {  required: true, validator: validateNum, trigger: 'blur', rule: new RegExp(/^[0-9]*$/), errMsg: '请选择工种'}

                ],
                emergPhone: [
                    { validator: validatePhone, trigger: 'blur', rule: new RegExp(/^1\d{10}$/), errMsg: '请输入正确的电话号码'}
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur', rule: new RegExp(/^1\d{10}$/), errMsg: '请输入正确的电话号码'}
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
    methods: {
        // 初始化人员信息
        initPersonnelData() {
            let obj2 = {}, obj = {};
            obj = {
                name: '',
                sex: '男',
                birthday: '',
                employeeNo: '',
                phone: '',
                sociRole: '',
                emergPeople: '',
                emergPhone: '',
                entryPhysica1Time: '',
                onDutyPhysica1Time: '',
                offDutyPhysica1Time: '',
                address: '',
                entryPhysicalExam: '',
                onDutyPhysicalExam: '',
                offDutyPhysicalExam: '',
                level: '',
                idCardNo: '',
                idCardImg1: '',
                idCardImg2: '',
                photo: '',
                acount: '',
                password: '',
                inYardTime: '',
                offDutyTime: '',
                jobStatus: '',
                userType: '',
                deptId: '',
                laborCompany: '',
                laborContractImg: '',
                socialSecurityEndTime: '',
                socialSecurityBeginTime: '',
                socialSecurityImg: '',
                remark: '',
                haveWorkCertificate: false,
                certificates: []
            };
            obj2 = {
                entryPhysicalExam: '上传',
                onDutyPhysicalExam: '上传',
                offDutyPhysicalExam: '上传',
                laborContractImg: '上传',
                socialSecurityImg: '上传',
                certificates: []
            };

            this.personnelData = Object.assign({}, obj);
            this.fileLoad = Object.assign({}, obj2);
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
        // 证书栏显示状态回调
        credentialsChange(isShow) {
            this.personnelData.certificates = [];
            this.fileLoad.certificates = [];
            if(isShow) {
               this.addCertificates();
            }
        },
        // 删除当前证书
        delCertificates(index) {
            this.personnelData.certificates.splice(1, index);
            this.fileLoad.certificates.splice(1, index);
            if(!index) {
                this.personnelData.haveWorkCertificate = false;
            }
        },
        // 添加证书空白栏
        addCertificates() {
            this.personnelData.certificates.push(Object.assign({}, this.certificatesOBJ));
            this.fileLoad.certificates.push({name: '上传'})
        },
        // 上传照片方法
        uploadRequest(NAME, file, formDataKey = 'multipartFiles') {
            let fileType = [];
            const [NAMEkey, NAMEindex] = NAME.split('-');
            switch(NAMEkey) {
                case 'entryPhysicalExam':
                case 'onDutyPhysicalExam':
                case 'offDutyPhysicalExam':
                case 'laborContractImg':
                case 'socialSecurityImg':
                    fileType = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
                    this.fileLoad[NAMEkey] = file.file.name;
                    break;
                case 'idCardImg1':
                case 'idCardImg2':
                case 'photo':
                    fileType = ['image/png', 'image/jpeg', 'image/jpg'];
                    this.fileLoad[NAMEkey] = file.file.name;
                    break;
                default:
                    fileType = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
                    this.fileLoad[NAMEkey][NAMEindex].name = file.file.name;
                    break;
            };

            fileType.includes(file.file.type) ?
            this.$AjaxUpLoader(NAME, file, formDataKey) :
            this.$message.error(`只能上传${fileType.map(e => e.split('/')[1]).join('、')}的格式文件`);
        },
        //  上传成功回调
        uploadSuccess(NAME, res) {
            const [NAMEkey, NAMEindex] = NAME.split('-');
            switch(NAMEkey) {
                case 'entryPhysicalExam':
                case 'onDutyPhysicalExam':
                case 'offDutyPhysicalExam':
                case 'laborContractImg':
                case 'socialSecurityImg':
                case 'idCardImg1':
                case 'idCardImg2':
                case 'photo':
                    this.personnelData[NAMEkey] = res;
                    break;
                default:
                    this.personnelData[NAMEkey][NAMEindex].url = res
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
        addSubmit() {
            this.$refs['personnelRef'].validate((valid) => {
                if (valid) {
                    this.$axios({
                        method: "post",
                        url: this.api.getSaveUser,
                        data: this.personnelData
                    }).then(res => {
                        if (res.data.statusCode == 200) {
                            this.$message({
                                message: "添加成功",
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
.add-personnel-cla{
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