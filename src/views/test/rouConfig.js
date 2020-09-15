const rouConfig = [
  {
    path: 'test',
    name: 'test',
    meta: {
        name: '测试'
    },
    component: () => import('./Test')
  }
];

export default rouConfig;