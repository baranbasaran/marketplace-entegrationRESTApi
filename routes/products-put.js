const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
module.exports = async function (ctx) {
  let { store, process } = ctx.params;
  let dat = ctx.request.body;
  dat = await require('../data.json');
  if (store === 'trendyol') {
    if (process === 'info-update') {
      ctx.body = await Trendyol.updateProducts(dat);
    } else if (process === 'stock-price') {
      ctx.body = await Trendyol.updatePriceAndInventory(dat);
    }
  } else if (store === 'gittigidiyor') {
    const data = await require('../datagGidiyor.json');
    if (process === 'update-products') {
      ctx.body = await Gittigidiyor.updateProducts(data);
      //////////////
    } else if (process === 'update-price') {
      ctx.body = await Gittigidiyor.updatePrice(data);
    } else if (process === 'update-stock') {
      console.log(process);
      ctx.body = await Gittigidiyor.updateStock(data);
      ///////////////
    } else if (process === 'update-variantStock') {
      ctx.body = await Gittigidiyor.updateVariantStock(data);
      //////////////
    } else if (process === 'update-marketPrice') {
      ctx.body = await Gittigidiyor.updateMarketPrice(data);
      //////////////
    } else if (process === 'update-productVariants') {
      ctx.body = await Gittigidiyor.updateProductVariants(data);
      //////////////
    }
  } else if (store === 'ciceksepeti') {
    if (process === 'info-update') {
      ctx.body = await Ciceksepeti.updateProducts(dat);
    } else if (process === 'stock-price') {
      ctx.body = await Ciceksepeti.updatePriceAndStock(dat);
    }
  } else {
    ctx.body = 'Store is not found';
  }
};
