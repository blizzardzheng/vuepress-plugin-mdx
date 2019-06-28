module.exports = (options, ctx) => {
  console.log(111, options);
  return {
     chainWebpack: require('./lib/webpack'),
     enhanceAppFiles: require('./lib/enhanceAppFiles').bind(options),
     extendPageData: require('./lib/extendPageData')
  }
}