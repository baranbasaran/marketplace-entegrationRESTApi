const isDate = require('../utils/isDate');
const Trendyol = require('../ecommerce/trendyol');
const Gittigidiyor = require('../ecommerce/gittigidiyor');

module.exports = async function (ctx) {
  let days = 86400000;
  let { store, status, questionId, start, end, page, size, orderField, orderBy } = ctx.params;
  if (store === 'trendyol') {
    
    if (questionId !== undefined) {
      ctx.body = await Trendyol.getQuestionById(questionId);
    }
    else{
      let filters = {
        status: status,
        orderByField: 'LastModifiedDate',
        orderByDirection: 'DESC',
      }; 
      if (isDate(start) && isDate(end)) {
        let startDate = Date.parse(start);
        let endDate = Date.parse(end);
        if (endDate > startDate + 14 * days) {
          endDate = startDate + 14 * days;
        }
        filters.startDate = startDate;
        filters.endDate = endDate;
      } else {
        let endDate = new Date().getTime();
        let startDate = endDate - 14 * days;
        filters.startDate = startDate;
        filters.endDate = endDate;
      }
      if(page !== undefined){
        filters.page = page;
      }
      if(size !== undefined){
        filters.size = size;
      }
      if(orderField !== undefined){
        let obf = orderField.substring(0,1);
        if(obf !== 'o' || obf !== 'O' || obf !== 'c' || obf !== 'C'){
          filters.orderByField = 'CreatedDate';
        }
      }
      if(orderBy !== undefined){
        let ob = orderBy.substring(0,1);
        if(ob !== 'a' || ob !== 'A'){
          filters.orderByDirection = 'ASC';
        }
      }
      ctx.body = await Trendyol.getQuestions(filters);
    }
  } else if (store === 'gittigidiyor') {
  } else {
    ctx.body = 'Store is not found';
  }
};
