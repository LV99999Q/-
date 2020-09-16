const rouConfig = [
  {
    path: 'managePeople',
    name: 'managePeople',
    meta: {
        name: '管理人员'
    },
    component: () => import('./ManagePeople')
  },
  {
    path: 'laborPeople',
    name: 'laborPeople',
    meta: {
        name: '劳务人员'
    },
    component: () => import('./LaborPeople')
  },
  {
    path: 'preJobEducation',
    name: 'preJobEducation',
    meta: {
        name: '岗前教育'
    },
    component: () => import('./PreJobEducation')
  },
  {
    path: 'organizationalStructure',
    name: 'organizationalStructure',
    meta: {
        name: '组织架构'
    },
    component: () => import('./OrganizationalStructure')
  }
];

export default rouConfig;