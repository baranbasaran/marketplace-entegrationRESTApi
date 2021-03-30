const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let { userType, productId, rate, comment, store } = ctx.params;

  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (ctx.params.hasOwnProperty("rate")) {
      ctx.body = await Gittigidiyor.replyOrRate({
        userType,
        productId,
        rate,
        comment,
      });
    } else if (!ctx.params.hasOwnProperty("rate")) {
      ctx.body = await Gittigidiyor.replyOrRate({
        userType,
        productId,
        comment,
      });
    }
  }
};
