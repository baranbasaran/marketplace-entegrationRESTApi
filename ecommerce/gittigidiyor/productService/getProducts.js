const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");

module.exports = async function (params, filters) {
  const { startOffSet, status, rowCount, productId } = filters;
  let xml;
  if (!filters.hasOwnProperty("productId")){
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:prod": "https://product.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "prod:getProducts": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            startOffSet,
            rowCount,
            status,
            withData: true,
            lang: "tr",
          },
        },
      },
    };
    const data = object2xml(xml);
    try {
      const response = await axios({
        method: "post",
        url:
          "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualProductService?wsdl",
        headers: params.headers,
        data: data,
      });
      return await xml2object(response.data);
    } catch (e) {
      return e;
    }
  } else {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:prod": "https://product.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "prod:getProduct": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            productId,
            itemId: {},
            lang: "tr",
          },
        },
      },
    };

    const data = object2xml(xml);
    try {
      const response = await axios({
        method: "post",
        url:
          "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualProductService?wsdl",
        headers: params.headers,
        data: data,
      });
      return await xml2object(response.data);
    } catch (e) {
      return e;
    }
  }
};
