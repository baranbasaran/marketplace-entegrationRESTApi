const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
const N11 = require('../ecommerce/n11');
const {
  SortMethods,
  ProductStatuses,
} = require('../ecommerce/ciceksepeti/Utils/Types');
const {
  filter,
} = require('../ecommerce/trendyol/Utils/CustomerClaimItemResponse');
module.exports = async function (ctx) {
  let { store, status, barcode, start, end, orderField, orderBy } = ctx.params;
  let filters = {};
  console.log(ctx.params);
  if (store === 'trendyol') {
    if (barcode !== undefined && status === 'sayfa')
      filters = { ...filters, page: barcode, size: 50 };
    if (status !== undefined && status !== 'sayfa') filters.approved = status;
    if (start !== undefined)
      filters.startDate = new Date(start).getTime() * 1000;
    if (end !== undefined) filters.endDate = new Date(end).getTime() * 1000;
    if (orderField !== undefined) filters.dateQueryType = orderField;
    if (barcode !== undefined && status !== 'sayfa')
      filters = { barcode: barcode };
    ctx.body = await Trendyol.filterProducts(filters);
  } else if (store === 'gittigidiyor') {
    const dat = await require('../datagGidiyor.json');
    if (status !== undefined) filters.status = status;
    else filters.status = 'A';
    if (start !== undefined && end !== undefined) {
      filters.startOffSet = start * end;
      filters.rowCount = end;
    } else {
      filters.startOffSet = 0;
      filters.rowCount = 100;
    }
    if (orderField !== undefined) filters.withData = orderField;
    else filters.withData = true;
    if (barcode !== undefined) filters = { productId: barcode };
    ctx.body = await Gittigidiyor.getProducts(filters);
  } else if (store === 'ciceksepeti') {
    let filters = {};
    if (status !== undefined)
      var productStatus = ProductStatuses.find(
        e => e.key === status || e.ProductStatus === status
      );
    filters.ProductStatus =
      productStatus !== undefined ? productStatus.ProductStatus : 1;
    if (end !== undefined) filters.PageSize = end;
    else filters.PageSize = 50;
    if (start !== undefined) filters.Page = start;
    else filters.Page = 1;
    if (orderField !== undefined)
      var sortMethod = SortMethods.find(e => e.key === orderField);
    filters.SortMethod = sortMethod !== undefined ? sortMethod.SortMethod : 1;
    if (barcode !== undefined) filters = { StockCode: barcode };
    console.log(filters);
    ctx.body = await Ciceksepeti.getProducts(filters);
  } else if (store === 'n11') {
    ctx.body = await N11.getProductList({ page: 1, size: 100 });
  } else {
    ctx.body = 'Store is not found';
  }
};
