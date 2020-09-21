const rouConfig = [
  {
    path: 'GJLPlanManage',
    name: 'GJLPlanManage',
    meta: {
        name: '钢筋笼计划管理'
    },
    component: () => import('./GJLPlanManage')
  },
  {
    path: 'GPPlanManage',
    name: 'GPPlanManage',
    meta: {
        name: '管片计划管理'
    },
    component: () => import('./GPPlanManage')
  },
  {
    path: 'BDPlanManage',
    name: 'BDPlanManage',
    meta: {
        name: '标段月计划'
    },
    component: () => import('./BDPlanManage')
  }
];

export default rouConfig;