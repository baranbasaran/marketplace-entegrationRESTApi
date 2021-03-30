const axios = require('axios');
const trendyolDatas = require('../Utils/trendyolDatas');
module.exports = async function (params, data) {
  data = await trendyolDatas(data.items, 'update');
  try {
    const response = await axios({
      method: 'put',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/v2/products`,
      headers: params.headers,
      data: data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
