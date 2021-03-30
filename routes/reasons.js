const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let { process, store } = ctx.params;
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (ctx.params.hasOwnProperty("process")) {
      if (process === "cancel") {
        ctx.body = await Gittigidiyor.getReasons({ process });
      }
    }
  }
};
