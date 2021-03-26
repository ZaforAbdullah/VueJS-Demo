Vue.component('navigation-link', {
	props: ['url'],
	template: `
	<a v-bind:href="url" class="nav-link">
	  <slot></slot>
	</a>
	`
})

var example1 = new Vue({
	el: '#demo-1',
})


