const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
module.exports = async function (ctx) {
  let {store, type} = ctx.params;
  if (store === 'trendyol') {
    if(type === 'orders'){
      ctx.body = await Trendyol.getOrderStatus();
    }
  } else {
    ctx.body = 'Store is not found';
  }
};
