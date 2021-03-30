const isDate = require('../utils/isDate');
const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');

module.exports = async function (ctx) {
  let days = 86400000;
  let { store, status, filter1, filter2, orderNumber } = ctx.params;
  if (store === 'trendyol') {
    if (!isNaN(filter1) && !isNaN(filter2)) {
      ctx.body = await Trendyol.getClaimsShipmentPackages({
        claimItemStatus: status,
        page: filter1,
        size: filter2,
      });
    } else if (orderNumber !== undefined) {
      ctx.body = await Trendyol.getClaimsShipmentPackages({
        orderNumber: orderNumber,
      });
    } else if (isDate(filter1) && isDate(filter2)) {
      let startDate = Date.parse(filter1);
      let endDate = Date.parse(filter2);
      if (endDate > startDate + 14 * days) {
        endDate = startDate + 14 * days;
      }
      ctx.body = await Trendyol.getClaimsShipmentPackages({
        claimItemStatus: status,
        startDate: startDate,
        endDate: endDate,
      });
    } else {
      let endDate = new Date().getTime();
      let startDate = endDate - 14 * days;
      ctx.body = await Trendyol.getClaimsShipmentPackages({
        claimItemStatus: status,
        startDate: startDate,
        endDate: endDate,
      });
    }
  } else if (store === 'gittigidiyor') {
  } else {
    ctx.body = 'Store is not found';
  }
};
