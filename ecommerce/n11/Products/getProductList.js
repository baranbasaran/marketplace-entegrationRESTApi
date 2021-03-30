const axios = require('axios');
const xml2object = require('../../../utils/xml2object');
const object2xml = require('../../../utils/object2xml');
const subUrl = 'productService/';
module.exports = async function (params, filters) {
  let xml = {
    'soapenv:Envelope': {
      $: {
        'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        'xmlns:sch': 'http://www.n11.com/ws/schemas',
      },
      'soapenv:Header': {},
      'soapenv:Body': {
        'sch:GetProductListRequest': {
          auth: params.auth,
          pagingData: {
            currentPage: filters.page,
            pageSize: filters.size,
          },
        },
      },
    },
  };
  const data = object2xml(xml);
  try {
    const response = await axios({
      method: 'post',
      url: `${params.url}${subUrl}`,
      headers: params.headers,
      data: data,
    });
    return await xml2object(response.data);
  } catch (e) {
    return e;
  }
};
