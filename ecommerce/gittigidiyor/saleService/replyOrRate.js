const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");

module.exports = async function (params, filters) {
  let { productId, userType, rate, comment } = filters;

  if (filters.hasOwnProperty("rate")) {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:giveRateAndComment": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            userType,
            productId,
            rate,
            comment,
            lang: "tr",
          },
        },
      },
    };
    const data = object2xml(xml);
    console.log(data);
    try {
      const response = await axios({
        method: "post",
        url:
          "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualSaleService?wsdl",
        headers: params.headers,
        data: data,
      });
      return await xml2object(response.data);
    } catch (e) {
      return e;
    }
  } else if (!filters.hasOwnProperty("rate")) {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:replySaleComment": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            userType,
            productId,
            comment,
            lang: "tr",
          },
        },
      },
    };
    const data = object2xml(xml);
    console.log(data);
    try {
      const response = await axios({
        method: "post",
        url:
          "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualSaleService?wsdl",
        headers: params.headers,
        data: data,
      });
      return await xml2object(response.data);
    } catch (e) {
      return e;
    }
  }
};
