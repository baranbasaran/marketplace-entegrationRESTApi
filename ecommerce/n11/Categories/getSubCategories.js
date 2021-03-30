const axios = require('axios');
const xml2object = require('../../../utils/xml2object');
const object2xml = require('../../../utils/object2xml');
const subUrl = 'categoryService/';
module.exports = async function (params, categoryId) {
  let url = `${params.url}${subUrl}`;
  let xml = {
    'soapenv:Envelope': {
      $: {
        'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        'xmlns:sch': 'http://www.n11.com/ws/schemas',
      },
      'soapenv:Header': {},
      'soapenv:Body': {
        'sch:GetSubCategoriesRequest': {
          auth: params.auth,
          categoryId: categoryId,
        },
      },
    },
  };
  const data = object2xml(xml);
  try {
    const response = await axios({
      method: 'post',
      url: url,
      headers: params.headers,
      data: data,
    });
    return await xml2object(response.data);
  } catch (e) {
    return e;
  }
};
