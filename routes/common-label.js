const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
module.exports = async function (ctx) {
  let { store, cargoTrackingNumber } = ctx.params;
  if (store === 'trendyol') {
    ctx.body = await Trendyol.getCommonLabel(cargoTrackingNumber);
  } else {
    ctx.body = 'Store is not found';
  }
};
