const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");

module.exports = async function (params, filters) {
  const { saleCode, process } = filters;
  if (process === "remindForApproval") {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:remindForApproval": {
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
  } else if (process === "returnForSale") {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:giveApprovalForRemandedItem": {
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
  } else if (process === "cancelWithCargo") {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:receiveRemandedItem": {
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
  } else if (process === "cancelForCancellation") {
    xml = {
      "soapenv:Envelope": {
        $: {
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
          "xmlns:sale": "http://sale.individual.ws.listingapi.gg.com",
        },
        "soapenv:Header": {},
        "soapenv:Body": {
          "sale:cancelSaleAfterEarlyCancellationRequest": {
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
  }
};
