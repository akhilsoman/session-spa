const Vue = require('vue')
const app = require('express')()
const path    = require('path');
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(path.join(__dirname,'/index.template.html'), 'utf-8')
});
const data = require('./data.json')

const render = (req, res) => {
  const app = new Vue({
    data: {
      content:data.contents
    },
    template: `<div><div v-for="item of content"><h2>{{ item.title }}</h2><p>{{ item.content }}</p></div></div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
}

module.exports = {
  render : render
}
