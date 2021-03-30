const axios = require("axios");
const xml2object = require("../../../utils/xml2object");
const object2xml = require("../../../utils/object2xml");
module.exports = async function (params, categoryCode) {
  let xml = {
    "soapenv:Envelope": {
      $: {
        "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
        "xmlns:cat": "http://categoryv2.anonymous.ws.listingapi.gg.com",
      },
      "soapenv:Header": {},
      "soapenv:Body": {
        "cat:getRequiredCategorySpecs": {
          categoryCode: categoryCode,
          lang: "tr",
        },
      },
    },
  };
  const data = object2xml(xml);
  try {
    const response = await axios({
      method: "post",
      url: "https://dev.gittigidiyor.com:8443/listingapi/ws/CategoryV2Service",
      headers: params.headers,
      data: data,
    });
    return await xml2object(response.data);
  } catch (e) {
    return e;
  }
};
