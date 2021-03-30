const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
module.exports = async function (ctx) {
  let { store, batchRequestId } = ctx.params;
  if (store === 'trendyol') {
    ctx.body = await Trendyol.getBatchRequestResult(batchRequestId);
  } else if (store === 'ciceksepeti') {
    ctx.body = await Ciceksepeti.getBatchRequestResult(batchRequestId);
  } else {
    ctx.body = 'Store is not found';
  }
};
