var example1 = new Vue({
  el: '#example-1',
  data: {
    message: 'message',
	checked: false,
	checkedNames: true,
	picked: 'One',
	selected: 'A',
	multiples: ''
  }
})

var example12 = new Vue({
  el: 'example-2',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})