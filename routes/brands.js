const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
module.exports = async function (ctx) {
  let { store, page, size, name } = ctx.params;
  if (store === 'trendyol') {
    if (!name) {
      page = !page ? 0 : page;
      size = !size ? 100 : size;
      ctx.body = await Trendyol.getBrands(page, size);
    } else {
      ctx.body = await Trendyol.getBrandsName(name);
    }
  } else {
    ctx.body = 'Store is not found';
  }
};
