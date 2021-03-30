const Trendyol = require("../ecommerce/trendyol");
const Gittigidiyor = require("../ecommerce/gittigidiyor");
const Ciceksepeti = require("../ecommerce/ciceksepeti");
module.exports = async function (ctx) {
  let { store, cargoCompany } = ctx.params;
  let data = ctx.request.body;
  if (store === "trendyol") {
    ctx.body = await Trendyol.getProviders();
  } else if (store === "ciceksepeti") {
    if (cargoCompany !== undefined) {
      switch (cargoCompany) {
        case "Ciceksepeti":
        case "ciceksepeti":
          ctx.body = await Ciceksepeti.cargoCiceksepeti(data);
          break;
        case "Integration":
        case "integration":
          ctx.body = await Ciceksepeti.cargoIntegration(data);
          break;
        case "both":
        case "Both":
          ctx.body = await Ciceksepeti.cargoCiceksepetiIntegration(data);
          break;
        default:
          ctx.body = "Unexpected Cargo Type";
          break;
      }
    } else {
      ctx.body = await Ciceksepeti.cargoCiceksepeti();
    }
  } else {
    ctx.body = "Store is not found";
  }
};
