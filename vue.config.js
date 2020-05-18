module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}
const path = require('path');

module.exports={
  outputDir: path.resolve(__dirname, '../PE/public'),
  devServer:{
    proxy:{
      '/src':{
        target: 'http://localhost:3000'
      }
    }
  }
}