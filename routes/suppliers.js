const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
module.exports = async function (ctx) {
  let { store } = ctx.params;
  if (store === 'trendyol') {
    ctx.body = await Trendyol.getSuppliersAddresses();
  } else {
    ctx.body = 'Store is not found';
  }
};
