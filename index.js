Vue.component('navigation-link', {
	props: ['url'],
	template: `
		<div class="container">
		  <header>
			<slot name="header">Header</slot>
		  </header>
		  <main>
			<slot>Main</slot>
		  </main>
		  <footer>
			<slot name="footer">Footer</slot>
		  </footer>
		</div>
	`
})

var example1 = new Vue({
	el: '#demo-1',
})


