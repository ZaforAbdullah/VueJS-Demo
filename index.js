Vue.component('my-list', {
  template: '#my-list',
  props: [ 'title', 'items' ]
});

new Vue({
  el: '#app',
  data: {
	 Shapes: 'Shapes',
	 Colors: 'Colors',
    shapes: [ 
      { name: 'Square', sides: 4 }, 
      { name: 'Hexagon', sides: 6 }, 
      { name: 'Triangle', sides: 3 }
    ],
    colors: [
      { name: 'Yellow', hex: '#F4D03F', },
      { name: 'Green', hex: '#229954' },
      { name: 'Purple', hex: '#9B59B6' }
    ]
  }
});