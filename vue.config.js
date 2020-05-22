const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../PE-master/public'),
  devServer:{
    proxy:{
      '/events':{
        target: 'http://localhost:3000'
      },
      '/category/nightlife':{
        target: 'http://localhost:3000'
      },
      '/category/outdoor':{
        target: 'http://localhost:3000'
      },
      '/category/library':{
        target: 'http://localhost:3000'
      },
      '/canceledEvents':{
        target: 'http://localhost:3000'
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}