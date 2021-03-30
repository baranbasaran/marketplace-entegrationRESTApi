const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let { saleCode, process, store } = ctx.params;
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    if (ctx.params.hasOwnProperty("process")) {
      if (process === "remindForApproval") {
        ctx.body = await Gittigidiyor.giveApproval({ saleCode, process });
      } else if (process === "cancelWithCargo") {
        ctx.body = await Gittigidiyor.giveApproval({ saleCode, process });
      } else if (process === "returnForSale") {
        ctx.body = await Gittigidiyor.giveApproval({ saleCode, process });
      } else if (process === "cancelForCancellation") {
        ctx.body = await Gittigidiyor.giveApproval({ saleCode, process });
      }
    }
  }
};
