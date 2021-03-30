const isDate = require('../utils/isDate');
const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
const luxonDate = require('../utils/luxonDate');

module.exports = async function (ctx) {
  let days = 86400000;
  let {
    store,
    status,
    filter1,
    filter2,
    orderNumber,
    orderField,
    order,
  } = ctx.params;
  if (store === 'trendyol') {
    if (orderField !== undefined) {
      let field = orderField.substring(0, 1);
      if (field === 'o' || field === 'O' || field === 'C' || field === 'c') {
        orderField = 'CreatedDate';
      } else {
        orderField = 'PackageLastModifiedDate';
      }
    } else {
      orderField = 'PackageLastModifiedDate';
    }
    if (order !== undefined) {
      let sort = order.substring(0, 1);
      if (sort === 'a' || sort === 'A') {
        order = 'ASC';
      } else {
        order = 'DESC';
      }
    } else {
      order = 'DESC';
    }
    if (!isNaN(filter1) && !isNaN(filter2)) {
      ctx.body = await Trendyol.getOrdersShipmentPackages(
        {
          status: status,
          page: filter1,
          size: filter2,
        },
        { orderByField: orderField, orderByDirection: order }
      );
    } else if (orderNumber !== undefined) {
      ctx.body = await Trendyol.getOrdersShipmentPackages({
        orderNumber: orderNumber,
      });
    } else if (isDate(filter1) && isDate(filter2)) {
      let startDate = Date.parse(filter1);
      let endDate = Date.parse(filter2);
      if (endDate > startDate + 14 * days) {
        endDate = startDate + 14 * days;
      }
      ctx.body = await Trendyol.getOrdersShipmentPackages(
        {
          status: status,
          startDate: startDate,
          endDate: endDate,
        },
        { orderByField: orderField, orderByDirection: order }
      );
    } else {
      let endDate = new Date().getTime();
      let startDate = endDate - 14 * days;
      ctx.body = await Trendyol.getOrdersShipmentPackages({
        status: status,
        startDate: startDate,
        endDate: endDate,
      });
    }
  } else if (store === 'gittigidiyor') {
  } else if (store === 'ciceksepeti') {
    let endDate = luxonDate.toUTC(luxonDate.today).toString();
    let startDate = luxonDate.minus(luxonDate.today, 14).toString();
    if (!isNaN(filter1) && !isNaN(filter2)) {
      ctx.body = await Ciceksepeti.getOrders({
        statusId: status,
        startDate: startDate,
        endDate: endDate,
        page: filter1,
        pageSize: filter2,
      });
    } else if (orderNumber !== undefined) {
      ctx.body = await Ciceksepeti.getOrders({
        orderNo: orderNumber,
        page: 0,
        pageSize: 100,
      });
    } else if (isDate(filter1) && isDate(filter2)) {
      startDate = luxonDate.toUTC(filter1).toString();
      endDate = luxonDate.toUTC(filter2);
      if (
        luxonDate
          .parse(filter2)
          .diff(luxonDate.parse(filter1), ['days'])
          .toObject().days > 14
      ) {
        endDate = luxonDate.plus(filter1, 14).toString();
      }
      ctx.body = await Ciceksepeti.getOrders({
        statusId: status,
        startDate: startDate,
        endDate: endDate,
        page: 0,
        pageSize: 100,
      });
    } else {
      ctx.body = await Ciceksepeti.getOrders({
        statusId: status,
        startDate: startDate,
        endDate: endDate,
        pageSize: 100,
        page: 0,
      });
    }
  } else {
    ctx.body = 'Store is not found';
  }
};
