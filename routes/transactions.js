const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let {
    startDate,
    endDate,
    startOffSet,
    rowCount,
    process,
    store,
  } = ctx.params;
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (ctx.params.hasOwnProperty("process")) {
      if (process === "beforeSale") {
        ctx.body = await Gittigidiyor.transactions({
          startDate,
          endDate,
          startOffSet,
          rowCount,
          process,
        });
      } else if (process === "afterSale") {
        ctx.body = await Gittigidiyor.transactions({
          startDate,
          endDate,
          startOffSet,
          rowCount,
          process,
        });
      }
    }
  }
};
