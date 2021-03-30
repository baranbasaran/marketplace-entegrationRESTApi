const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");
const gittiGidiyorDatas = require("../gittiGidiyorDatas");

module.exports = async function (params, data) {
  product = await gittiGidiyorDatas(data.items, "update-products");
  let obj2xml = {
    "soapenv:Envelope": {
      $: {
        "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
        "xmlns:prod": "https://product.individual.ws.listingapi.gg.com",
      },
      "soapenv:Header": {},
      "soapenv:Body": {
        "prod:updateProductWithNewCargoDetail": {
          apiKey: params.apiKey,
          sign: params.sign,
          time: params.time,
          itemId: {},
          productId: 642028040,
          product: product.items,
          onSale: false,
          forceToSpecEntry: false,
          nextDateOption: false,
          lang: "tr",
        },
      },
    },
  };
  const xml = object2xml(obj2xml);
  //"message": " Perakende Satış Fiyatı Hemen Al Fiyatından büyük olmalıdır.",
  console.log(xml);
  try {
    const response = await axios({
      method: "post",
      url:
        "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualProductService",
      headers: params.headers,
      data: xml,
    });
    return await xml2object(response.data);
  } catch (e) {
    return e;
  }
};
