const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
const N11 = require('../ecommerce/n11');
module.exports = async function (ctx) {
  let { store, id, attributes } = ctx.params;
  if (store === 'trendyol') {
    if (attributes === 'ozellikler') {
      ctx.body = await Trendyol.getCategoryAttributes(id);
    } else {
      ctx.body = await Trendyol.getCategoryTree();
    }
  } else if (store === 'gittigidiyor') {
    if (attributes === 'ozellikler') {
      ctx.body = await Gittigidiyor.getCategorySpecs(id);
    } else if (attributes === 'gerekli') {
      ctx.body = await Gittigidiyor.getRequiredCategorySpecs(id);
    } else if (Number.isInteger(id) && Number.isInteger(attributes)) {
      let page = id;
      let size = attributes;
      ctx.body = await Gittigidiyor.getCategories(page, size);
    } else if (attributes === undefined && id !== undefined) {
      ctx.body = await Gittigidiyor.getCategoriesByCodes(id);
    } else {
      ctx.body = await Gittigidiyor.getCategories(0, 100, true, true, true);
    }
  } else if (store === 'ciceksepeti') {
    if (attributes === 'ozellikler') {
      ctx.body = await Ciceksepeti.getCategoryAttributes(id);
    } else {
      ctx.body = await Ciceksepeti.getCategories();
    }
  } else if (store === 'n11') {
    if (id !== undefined) {
      if (attributes !== undefined) {
        switch (attributes) {
          case 'ozellikler':
            ctx.body = await N11.getCategoryAttributes(id);
            break;
          case 'ust-kategori':
            ctx.body = await N11.getParentCategory(id);
            break;
          case 'alt-kategori':
            ctx.body = await N11.getSubCategories(id);
            break;
        }
      } else {
        ctx.body = await N11.getSubCategories(id);
      }
    } else {
      ctx.body = await N11.getTopLevelCategories();
    }
  } else {
    ctx.body = 'Store is not found';
  }
};
