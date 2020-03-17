import action from '@/views/action'

const routers = ['action','setup','reactive','ref','computed','watch','provider','lifehooks'].map( item => {
  return {
    path: `/${item}`,
    name: item,
    meta: {
      title: item
    },
    component: () => import(`@/views/${item}.vue`)
  }
})

export default [
  {
    path: '/',
    name: 'main',
    meta: {
      title: '首页'
    },
    component: action
  },
  ...routers
]
