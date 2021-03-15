Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

var example1 = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '<b> First Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 2, title: 'Blogging with Vue', content: '<b> Second Content </br>', publishedAt: 'Today', comments: 'good'},
      { id: 3, title: 'Why Vue is so fun', content: '<b> Third Content </br>', publishedAt: 'Today', comments: 'good'}
    ],
	postFontSize: 1
  },
  methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
    }
  }
})


