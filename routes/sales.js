const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");

module.exports = async function (ctx) {
  let {
    status,
    orderBy,
    orderType,
    page,
    size,
    store,
    saleCode,
    startDate,
    endDate,
    reasonId,
  } = ctx.params;
  console.log();
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (
      ctx.params.hasOwnProperty("status") &&
      !ctx.params.hasOwnProperty("startDate") &&
      !ctx.params.hasOwnProperty("reasonId")
    ) {
      ctx.body = await Gittigidiyor.getSale({
        status,
        orderBy,
        orderType,
        page,
        size,
      });
    } else if (
      ctx.params.hasOwnProperty("saleCode") &&
      !ctx.params.hasOwnProperty("startDate") &&
      !ctx.params.hasOwnProperty("reasonId")
    ) {
      ctx.body = await Gittigidiyor.getSale(saleCode);
    } else if (ctx.params.hasOwnProperty("startDate")) {
      ctx.body = await Gittigidiyor.getSale({
        status,
        orderBy,
        orderType,
        startDate,
        endDate,
        page,
        size,
      });
    } else if (
      ctx.params.hasOwnProperty("saleCode") &&
      ctx.params.hasOwnProperty("reasonId")
    ) {
      ctx.body = await Gittigidiyor.getCancelSale({
        saleCode,
        reasonId,
      });
    }
  }
};
