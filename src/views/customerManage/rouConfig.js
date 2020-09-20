const rouConfig = [
  {
    path: 'BidSectionManage',
    name: 'BidSectionManage',
    meta: {
        name: '管理人员'
    },
    component: () => import('./BidSectionManage')
  },
  {
    path: 'MetroLineManage',
    name: 'MetroLineManage',
    meta: {
        name: '劳务人员'
    },
    component: () => import('./MetroLineManage')
  }
];

export default rouConfig;