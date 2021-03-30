const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let { saleCode, userType, store } = ctx.params;
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (ctx.params.hasOwnProperty("saleCode"))
      ctx.body = await Gittigidiyor.removeSaleFromList({ saleCode, userType });
  }
};
