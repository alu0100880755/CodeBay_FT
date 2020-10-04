
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/event', component: () => import('pages/Index.vue') },
      { path: '/accesories', component: () => import('pages/Index.vue') },
      { path: '/apparel', component: () => import('pages/Index.vue') },
      { path: '/featured', component: () => import('pages/Index.vue') },
      { path: '/support', component: () => import('pages/Index.vue') },
      { path: '/contact', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
