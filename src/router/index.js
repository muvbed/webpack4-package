import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/', 
			component: () => import('@/components/Example.vue')
		}
	]
})
