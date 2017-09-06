window.onload = function() {
  new Vue({
      el: '#app',
      template: `<div><div v-if="content.length == 0">Loading..</div><div v-for="item of content"><h2>{{ item.title }}</h2><p>{{ item.content }}</p></div></div>`,
      data () {
        return {
          content : []
        }
      },
      mounted: function () {
          var self = this
          axios.get('/api/getResults')
          .then(function (response) {
              self.content = response.data.contents;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  })
}
