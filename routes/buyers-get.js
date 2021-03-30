const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
module.exports = async function (ctx) {
  let { startOffSet, byStatus, rowCount, store } = ctx.params;
  if (store === "trendyol") {
  } else if (store === "gittigidiyor") {
    ctx.body = await Gittigidiyor.getItemBuyers({
      startOffSet,
      byStatus,
      rowCount,
    });
  }
};
