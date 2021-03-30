const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");
const formatDate = require("../../../utils/formatDate");

module.exports = async function (params, filters) {
  let { startDate, endDate, startOffSet, rowCount, process } = filters;

  if (process === "beforeSale") {
    startDate = formatDate(startDate); //yyyy-mm-gg
    endDate = formatDate(endDate);
    startOffSet < 1 ? (startOffSet = 1) : startOffSet; // sayfa numarası 1 den küçük olamaz.
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:getSaleProcessReport": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            startDate,
            endDate,
            startOffSet,
            rowCount,
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
          "https://dev.gittigidiyor.com:8443/listingapi/ws/IndividualSaleService?wsdl",
        headers: params.headers,
        data: data,
      });
      return await xml2object(response.data);
    } catch (e) {
      return e;
    }
  } else if (process === "afterSale") {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:getAccountTransactionsV2": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            startDate,
            endDate,
            startOffSet,
            rowCount,
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
