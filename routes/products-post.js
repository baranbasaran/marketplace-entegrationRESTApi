const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
module.exports = async function (ctx) {
  let { store } = ctx.params;
  let dat = ctx.request.body;
  dat = await require('../data.json');
  if (store === 'trendyol') {
    ctx.body = await Trendyol.createProducts(dat);
  } else if (store === 'ciceksepeti') {
    ctx.body = await Ciceksepeti.createProducts(dat);
  } else {
    ctx.body = 'Store is not found';
  }
};
