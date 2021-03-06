var handlebars = require('handlebars');

module.exports = function(hexo){return function(options){
  var opts = options.hash || {},
    hexoHelpers = hexo.extend.helper.list(),
    result;

  result = hexoHelpers.paginator(opts);
  return new handlebars.SafeString(result);
}};
