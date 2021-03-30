const isDate = require('../utils/isDate');
const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');
const Ciceksepeti = require('../ecommerce/ciceksepeti');
const luxonDate = require('../utils/luxonDate');

module.exports = async function (ctx) {
  let days = 86400000;
  let { store, dateType, orderNumber, start, end, transactionType, page, size } = ctx.params;
  if (store === 'trendyol') {
    let filters = {};
    if (orderNumber !== undefined && end === undefined) {
      filtes = {
        orderNumber:orderNumber
      };
    } else if (isDate(start) && isDate(end)) {
      let startDate = Date.parse(start);
      let endDate = Date.parse(end);
      if (endDate > startDate + 14 * days) {
        endDate = startDate + 14 * days;
      }
      filters = {
        dateType: dateType,
        startDate: startDate,
        endDate: endDate,
      };
    } else {
      let endDate = new Date().getTime();
      let startDate = endDate - 14 * days;
      filters = {
        dateType: dateType,
        startDate: startDate,
        endDate: endDate,
      };
    }
    if(transactionType !== undefined){
      filters.transactionTypeName = transactionType;
    }
    if(page !== undefined){
      filters.page = page;
    }
    if(size !== undefined){
      filters.size = size;
    }
    ctx.body = await Trendyol.getFilterSettlements(filters);
  } else if (store === 'gittigidiyor') {
  } else if (store === 'ciceksepeti'){
    let filters = {
      pageSize:100,
      page:0,
    };
    let endDate = luxonDate.toUTC(luxonDate.today).toString();
    let startDate = luxonDate.minus(luxonDate.today, 14).toString();
    if (orderNumber !== undefined && end === undefined) {
      filtes = {
        ...filters,
        orderProductId:orderNumber
      };
    } else if (isDate(start) && isDate(end)) {
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
      filters = {
        ...filters,
        startDate: startDate,
        endDate: endDate,
      };
    } else {
      filters = {
        ...filters,
        startDate: startDate,
        endDate: endDate,
      };
    }
    if(dateType !== undefined){
      filters.searchDateType = dateType;
    }
    if(transactionType !== undefined){
      filters.isPaid = transactionType;
    }
    if(page !== undefined){
      filters.page = page;
    }
    if(size !== undefined){
      filters.pageSize = size;
    }
    ctx.body = await Ciceksepeti.getAllowances(filters);
  } else {
    ctx.body = 'Store is not found';
  }
};
