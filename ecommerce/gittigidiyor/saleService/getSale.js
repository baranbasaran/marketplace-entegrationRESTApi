const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");
const formatDate = require("../../../utils/formatDate");

module.exports = async function (params, filters) {
  let {
    status,
    orderBy,
    orderType,
    page,
    size,
    saleCode,
    startDate,
    endDate,
  } = filters;
  startDate = formatDate(startDate); //yyyy-mm-gg
  endDate = formatDate(endDate);

  if (filters.hasOwnProperty("saleCode")) {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:getSale": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            saleCode,
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
  } else if (
    !filters.hasOwnProperty("saleCode") &&
    !filters.hasOwnProperty("startDate")
  ) {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:getPagedSales": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            withData: false,
            byStatus: status,
            byUser: {},
            orderBy,
            orderType,
            pageNumber: page,
            pageSize: size,
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
  } else if (
    filters.hasOwnProperty("startDate") &&
    filters.hasOwnProperty("endDate")
  ) {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:getSalesByDateRange": {
            apiKey: params.apiKey,
            sign: params.sign,
            time: params.time,
            withData: false,
            byStatus: status,
            byUser: {},
            orderBy,
            orderType,
            startDate,
            endDate,
            pageNumber: page,
            pageSize: size,
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
