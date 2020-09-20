const rouConfig = [
  {
    path: 'GJLQualityTestRecord',
    name: 'GJLQualityTestRecord',
    meta: {
        name: '钢筋笼质检记录'
    },
    component: () => import('./GJLQualityTestRecord')
  },
  {
    path: 'SCXQualityTestRecord',
    name: 'SCXQualityTestRecord',
    meta: {
        name: '生产线质检记录'
    },
    component: () => import('./SCXQualityTestRecord')
  },
  {
    path: 'GPQualityTestRecord',
    name: 'GPQualityTestRecord',
    meta: {
        name: '管片质检记录'
    },
    component: () => import('./GPQualityTestRecord')
  },
  {
    path: 'CRCRecord',
    name: 'CRCRecord',
    meta: {
        name: '出入池记录'
    },
    component: () => import('./CRCRecord')
  },
  {
    path: 'QualityTestManage',
    name: 'QualityTestManage',
    meta: {
        name: '检验报告管理'
    },
    component: () => import('./QualityTestManage')
  },
  {
    path: 'GPQuality',
    name: 'GPQuality',
    meta: {
        name: '管片质量追溯'
    },
    component: () => import('./GPQuality')
  }
];

export default rouConfig;