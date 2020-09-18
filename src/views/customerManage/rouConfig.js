const rouConfig = [
  {
    path: 'metroLineManage',
    name: 'metroLineManage',
    meta: {
        name: '地铁线管理'
    },
    component: () => import('./MetroLineManage')
  },
  {
    path: 'bidSectionManage',
    name: 'bidSectionManage',
    meta: {
        name: '标段管理'
    },
    component: () => import('./BidSectionManage')
  }
];

export default rouConfig;