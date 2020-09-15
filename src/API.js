export default {
    dengLu: 'api/login/go',  //登录
    getMessages:'api/login/getMessage', //获取消息
    //构件库
    getAllInfo: 'api/type/getAllType', //数据列表
    getProject: 'api/task/getAllProject', //获取项目名称
    getBuildNo: 'api/task/getAllBuildByProject',//获取所有楼号
    getFloor: 'api/task/getAllFloorByProjectAndBuild',//获取楼层
    getTypeCodesPage: 'api/type/getTypeCodesOfFloorWithPage',//详情页数据
    getTypeCodesOfFloor: 'api/type/getTypeCodesOfFloor',//获取图纸
    subUpImg: 'api/product/download',//下载
    submitFile: 'api/product/zipUpload', //上传构件
    deleteTypeByFloor: 'api/type/deleteTypeByFloor',//删除某层构件
    deleteTypeInBatch: 'api/type/deleteTypeInBatch', //构件详情页多项删除
    updateType: 'api/type/updateType', //修改构件库

    getTechList: 'api/type/getTechList', //获取技术交底
    addTech: 'api/type/addTech', //技术交底  新增
    updateTech: 'api/type/updateTech', //技术交底  修改
    deleteTech: 'api/type/deleteTech', //删除

    getTechChildList: 'api/type/getTechChildList', //获取子类型技术交底
    addTechChild: 'api/type/addTechChild', //技术交底子类型  新增
    updateTechChild: 'api/type/updateTechChild', //技术交底子类型  修改
    deleteTechChild: 'api/type/deleteTechChild', //技术交底子类型 删除

    getTechChildDetailList: 'api/type/getTechChildDetailList', //技术交底列表
    addTechChildDetail: 'api/type/addTechChildDetail', //技术交底列表  新增
    updateTechChildDetail: 'api/type/updateTechChildDetail', //技术交底列表  修改
    deleteTechChildDetail: 'api/type/deleteTechChildDetail', //技术交底列表 删除
    submitFileTechUpload: 'api/type/fileTechUpload', //文件上传


    getDrawingList: 'api/type/getDrawingList', //获取 图纸管理
    addDrawing: 'api/type/addDrawing', // 图纸管理  新增
    updateDrawing: 'api/type/updateDrawing', // 图纸管理  修改
    deleteDrawing: 'api/type/deleteDrawing', // 图纸管理删除

    getDrawingChildList: 'api/type/getDrawingChildList', //图纸管理列表
    addDrawingChild: 'api/type/addDrawingChild', //图纸管理列表  新增
    updateDrawingChild: 'api/type/updateDrawingChild', //图纸管理列表  修改
    deleteDrawingChild: 'api/type/deleteDrawingChild', //图纸管理列表 删除
    fileDrawingUpload: 'api/type/fileDrawingUpload', //文件上传


    //隐蔽工程质监记录
    getAllBuildByProject: "api/componentDayPlan/findBuildNoByProject",//根据项目ID获取该项目下所有楼号
    getAllFloorByProjectAndBuild: "api/componentDayPlan/findFloorByBuildNo",//根据项目和楼号返回所有楼层
    getAllProject: "api/componentDayPlan/findProjectInfos",//获取所有项目
    getProduction: 'api/componentDayPlan/findLineInfos',// 获取生产线
    getTeams: 'api/componentDayPlan/findGroups',//获取班组信息
    getRebarSheet: 'api/componentDayPlan/findComponents',//获取钢筋新增计划的楼层构建信息
    getPlanInfo: 'api/componentDayPlan/addRebarDayPlan',//添加钢筋计划
    getaddRebarDayPlan: 'api/componentDayPlan/addComponentDayPlan',//提交构建信息
    getPlanPage: 'api/componentDayPlan/dayPlanPage',
    getDayPlanDetail: 'api/componentDayPlan/count/num',
    getHiddenRecordInfo: 'api/hiddenTestRecord/getHiddenTestRecord',//获取隐蔽工程记录
    getTypeNumAndHiddenNum: 'api/hiddenTestRecord/getTypeNumAndHiddenNum',//获取隐蔽工程总数据
    getComponentRecordInfo: 'api/componentTestRecord/getComponentTestRecord',//获取成品构质检记录
    getTypeNumAndProductNum: 'api/componentTestRecord/getTypeNumAndProductNum',//获取成品构质检总数据
    changeComponentStatus: 'api/type/changeComponentStatus',//修改构件状态
    getTypeList: 'api/type/getTypeListWithPage', //获取构件状态改变列表
    DemouldWriteCart: 'api/demould/DemouldWriteCart', //构件状态管理 写入芯片
    lookCart: 'api/demould/carddata',  //查看芯片
    cardInfo: 'http://127.0.0.1:8080/card/info', //查看芯片

    getCardInfo: 'api/user/read', //读取卡信息
    setCardInfo: 'api/user/write', //写入卡信息
    printCard: 'api/user/printCard', // 打印卡


    getCategorys: 'api/type/getCategorys', //获取所有构件类型
    getProvider: 'api/dibang/getProvider', //获取供应商


    //人员档案
    getUserLists: 'api/user/getUserListWithPage', //获取用户列表
    getUpload: 'api/user/upload', //上传图片
    getSaveUser: 'api/user/saveUser',//新增和修改用户信息
    getDeletUser: 'api/user/deleteUserById', //删除用户
    getUserDetail: 'api/user/getDetailByUserId',//查看用户详情
    getSearchUser: 'api/user/getUserListWithPage',//根据条件查找信息
    getGroups: 'api/user/getAllDept',//返回所有部门
    getRoles: 'api/user/getAllRole',//返回所有角色
    checkAcount: 'api/user/checkAccount',//检查帐号是否存在
    checkIdCard: 'api/user/checkIdCardNo',//检查身份证号码是否存在
    downloadUserCode: 'api/user/downloadQRCode',//下载人员信息二维码
    importExcel:'api/user/importExcel', //导入人员表格
    // 部门管理
    addDept: 'api/dept/addDept',//添加部门或班组
    addDeptManager: 'api/dept/addDeptManager',//新增部门、班组负责人
    addDeptToLine: 'api/dept/addDeptToLine',//将班组添加到生产线
    addDeptUser: 'api/dept/addDeptUser',//批
    addLine: 'api/dept/addLine',//新增或更新生产线信息量新增部门、班组成员
    addJob: 'api/dept/addJob',//新增岗位
    addUserToJob: 'api/dept/addUserToJob',//批量添加用户到岗位下
    deleteDeptFromLine: 'api/dept/deleteDeptFromLine',//将班组从当前生产线删除
    deleteDepts: 'api/dept/deleteDepts',//删除部门---暂时只考虑单个删除
    deleteJob: 'api/dept/deleteJob',//删除岗位---暂时只考虑单个删除
    deleteLine: 'api/dept/deleteLine',//删除生产线
    deleteUserFromDept: 'api/dept/deleteUserFromDept',//删除部门、班组成员---暂时只考虑一个一个删除
    deleteUserFromJob: 'api/dept/deleteUserFromJob',//从当前岗位中删除该员工
    findDeptsOfLine: 'api/dept/findDeptsOfLine',//获取生产线下所有部门
    finDeptById: 'api/dept/finDeptById',//通过id查询部门信息
    findLineById: 'api/dept/findLineById',//通过生产线id返回该生产线的信息
    getAllDepts: 'api/dept/getAllDepts',//返回所有部门或班组
    getAllJobsByDeptWithPage: 'api/dept/getAllJobsByDeptWithPage',//根据部门ID获取所有岗位
    getAllNoLineDeptWithPage: 'api/dept/getAllNoLineDeptWithPage',//获取所有未分配到流水线的班组
    getAllUserNotInDeptWithPage: 'api/dept/getAllUserNotInDeptWithPage',//获取所有没有分到班组的人
    getAllUserNotInJobWithPage: 'api/dept/getAllUserNotInJobWithPage',//获取当前部门下所有未分配到岗位的人员
    getAllUserOfJobWithPage: 'api/dept/getAllUserOfJobWithPage',//获取该岗位下所有人员信息
    getDeptBySearchWithPage: 'api/dept/getDeptBySearchWithPage',//根据搜索条件搜索对应班组
    getDeptListWithPage: 'api/dept/getDeptListWithPage',//获取部门列表 或班组列表
    getLineListWithPage: 'api/dept/getLineListWithPage',//获取生产线列表
    getUserListByDeptIdWithPage: 'api/dept/getUserListByDeptIdWithPage',//获取某部门或班组下所有用户
    getUsersBySearchWithPage: 'api/dept/getUsersBySearchWithPage',//根据搜索条件在所有人中搜索符合条件的人
    modifyDept: 'api/dept/modifyDept',//修改部门信息 或班组信息
    modifyJob: 'api/dept/modifyJob',//修改岗位信息
    signDeptContent: 'api/dept/signDeptContent',//进入人员管理页面
    signDeptPage: 'api/dept/signDeptPage',//进入dept管理主页
    addModal: 'api/dept/savePlatform', //新增、修改模台
    getModalList: 'api/dept/getPlatformListWithPage',//获取模台管理列表
    deletePlatform: 'api/dept/deletePlatform',//删除指定模台


    //发运管理
    getShipList: 'api/shipment/order/getOrderListWithPage', //获取发运订单列表
    getOrderDatails: 'api//shipment/order/getOrderDetail', //查看订单详情
    deletedayPlan: 'api/componentDayPlan/delete', //删除钢筋网片或成品构件日计划
    getCarList: 'api/car/getCarListWithPage',//获取车辆信息列表
    deleteCar: 'api/car/delete',//删除指定汽车信息
    getAddressList: 'api/address/getAddressListWithPage',//获取收货地址列表
    affirmOrder: 'api/shipment/order/verifyOrder',//确认订单
    getUserList: 'api/shipment/order/getAddrList',//获取收货人列表
    addCarInfo: 'api/car/addCar',//新增车辆信息
    addAddress: 'api/address/addAddress',//新增收货地址
    deletAddress: 'api/address/delete',//删除地址信息
    getComponentList: 'api/shipment/order/getTagList',//获取楼层类型列表
    submitOrder: 'api/shipment/order/add',//新建订单
    submitEditOrder: 'api/shipment/order/update',//修改订单
    deletOrder: 'api/shipment/order/deleteOrder', //删除订单
    getShipmentList: 'api/shipment/order/getShipmentList',//获取发运记录列表
    getDetailOfShipment: 'api/shipment/order/getDetailOfShipment',//获取发运订单详情
    getBorrowListWithPage: 'api/shipment/order/getBorrowListWithPage',//获取借用记录列表
    getBorrowDetailByOrderNo: 'api/shipment/order/getBorrowDetailByOrderNo',//获取订单借用详情
    getReturnRecordListWithPage: 'api/shipment/order/getReturnRecordListWithPage', //获取退货记录
    getReturnDetailByOrderNo: 'api/shipment/order/getReturnDetailByOrderNo',//退货订单详情
    getExchangeListWithPage: 'api/shipment/order/getExchangeListWithPage',//获取换货记录列表
    getExchangeDetailByOrderNo: 'api/shipment/order/getExchangeDetailByOrderNo',//换货订单详情
    getDeliveryReceiptInfo: 'api/shipment/order/getDeliveryReceiptInfo',//获取发运订单
    setDefaultAddress: 'api/address/setDefaultAddress', //指定默认收货地址（修改默认收货地址）
    cancelOrder: 'api/shipment/order/cancelOrder', //取消订单


    // 堆场管理，堆场划分
    GetYardInfo: 'api/yard/GetYardInfo',//获取堆场列表
    getYardInfoById: 'api/yard/getYardInfoById',//获取单个堆场信息
    updateYardStatus: 'api/yard/updateYardStatus',//更新堆场使用状态
    UpdateYardInfo: 'api/yard/UpdateYardInfo',//更新堆场
    insertYardInfo: 'api/yard/insertYardInfo',//增加堆场
    deleteYardInfo: 'api/yard/deleteYardInfo',//删除堆场
    getComponentByYardIdWithPage: 'api/yard/getComponentByYardIdWithPage',//查看库存
    delUnitInfo: 'api/yard/delUnitInfo',//删除堆场单元


    // 堆场管理，构件动态堆场
    getYardComponentInfo: 'api/yard/getYardComponentInfo',//获取构件动态堆场列表
    // 堆场管理，移库记录
    getMoveRecordInfoWithPage: 'api/yard/getMoveRecordInfoWithPage',//获取移库记录列表

    // 堆场管理
    GetYard: 'api/yard/GetYard',//获取所有堆场、单元
    getProjectInfo: 'api/yard/getProjectInfo',//获取所有项目、构件类型、楼号、楼层

    //物料管理
    //获取地磅数据列表
    getDiBang: 'api/dibang/list',//获取地磅数据列表
    getShData: '',
    getDiBangTotal: 'api/dibang/totalList',//获取地磅数据列表
    getSelectData: 'api/dibang/getSelectData', //获取地磅类型
    getBanZhanList: 'api/banzhan/list',// 获取拌站数据列表
    getInventList: 'api/store/list', // 获取库存统计列表
    updateInventL: 'api/store/update',//修改库存
    gangjinlist: 'api/dibang/rebar/list',//钢筋消耗列表
    getParam: 'api/banzhan/xp/param', //商混送货单设置数据列表
    //工程进度管理
    getProjectList: 'api/project/getProjectList',//获取项目列表
    getAllProject2: 'api/task/getAllProject',//获取所有项目
    saveProjectInfo: 'api/project/saveProjectInfo',//新增，修改项目信息
    deleteCardData: 'api/project/deleteCardData',//删除项目信息
    getManageList: 'api/project/getManagerList',//获取负责人列表
    searchUsers: 'api/project/findUserBySearch',//搜索人员信息
    deleteManager: 'api/project/deleteManagerOfProject',//删除负责人
    addManager: 'api/project/addManageForProject',//新增负责人

    //模台优化列表
    getMoldplaten: 'api/componentDayPlan/moldplaten',//获取模台优化列表

    //工程进度明细
    getreportforms: 'api/reportforms/getreportforms',//获取某项目进度明细
    getfloorDetails: 'api/reportforms/getfloorDetails',//获取（项目，楼号，楼层，材料）明细



    //报表
    getProjectInfo2: 'api/reportforms/getProjectInfo',//获取项目
    getProjectRate: 'api/reportforms/getProjectRate',//获取楼层计划详细
    getBuildInfo: 'api/reportforms/getBuildInfo',//获取楼层饼状图数据


    //能耗管理
    getAmmeterList: 'api/ele/list', //获取用电列表
    getDataList: 'api/ele/getData', //获取用电列表(打印)
    getListDetailPage: 'api/ele/detail/page', //获取用电列详情

    getListDetail: 'api/ele/detail', //获取用电列详情不分页
    //计划管理
    updateDayPlan: 'api/componentDayPlan/updateDayPlan', //修改钢筋计划



    boilerList: 'api/energy/boiler', //锅炉列表
    boilerListDetails: 'api/energy/boiler/list', //锅炉详情
    getWaterList: 'api/energy/water', //水表数据
    getWaterListDetailsPage: 'api/energy/water/list/page', //水表数据列表

    getWaterListDetails: 'api/energy/water/list', //水表数据列表

    getRebarPlanInfo: 'api/reportforms/getRebarPlanInfo', //网片计划对比
    getRebarPlanInfoDetail: 'api/reportforms/getRebarPlanInfoDetail', //楼号楼层对比

    getProductPlanInfo: 'api/reportforms/getProductPlanInfo', //网片计划对比
    getProductPlanInfoDetail: 'api/reportforms/getProductPlanInfoDetail', //楼号楼层对比

    getPrintBoilerdata: 'api/energy/boiler/getdata', //天然气导出
    getPrintWaterdata: 'api/energy/water/getWaterdata', //水表导出

    checkout: 'api/login/valid', //从设备管理页面跳转回来 进行校验

    getResByRole: 'api/role/getResByRole', //权限分配
    addRole: 'api/role/addRole', //添加角色
    addRestRole: 'api/role/addResToRole', //提交权限分配
    deletRole: 'api/role/deleteRole', //删除
    getAllRoleList: 'api/role/getRoleListWithPage', //获取数据列表
    getRoleJuese: 'api/role/getResByRole', //获取角色列表

    addDocumentType: 'api/document/addType',//添加技术交底类型
    getDocumentProject: 'api/document/project',//获取项目列表
    getDocumentType: 'api/document/type',//获取项目列表
    techinicalUpload: 'api/document/upload', //技术交底上传图片
    addDocument: 'api/document',//技术交底新建资料
    documentList: 'api/document/list',//技术交底列表
    documentCode: 'api/document/downloadQRCode',//技术交底列表
    documentDetail: 'api/document//detail', //二维码查看文件详情
    BusinessParameter: 'api/banzhan/xp', //商混台账
    addBusiness: 'api/banzhan/xp/add', //添加信息
    updateBusiness: 'api/banzhan/xp/update', //修改信息
    xpStatics: 'api/banzhan/xp/statics', //商混统计报表
    xpweek: 'api/banzhan/xp/statics/week', //商混周报
    xpyear: 'api/banzhan/xp/statics/year', //商混年报



    // 客户管理
    delCustomManage: 'api/customerManager/del', // 新增修改客户
    customManage: 'api/customerManager/save', // 新增修改客户
    getCustomManageList: 'api/customerManager/getCustomerListWithPage', // 获取客户管理列表


    //权限
    roleLevel:'api/role/level', //获取权限信息
    getRoleUser:'api/role/level/user'
}