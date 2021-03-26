Vue.component('navigation-link', {
	props: ['url'],
	template: `
		<button type="submit">
		  <slot>Submit</slot>
		</button>
	`
})

var example1 = new Vue({
	el: '#demo-1',
})


