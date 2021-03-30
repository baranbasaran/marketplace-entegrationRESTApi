const axios = require('axios');
const trendyolDatas = require('../Utils/trendyolDatas');
module.exports = async function (params, data) {
  data = await trendyolDatas(data.items, 'stock-and-price');
  try {
    const response = await axios({
      method: 'post',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/products/price-and-inventory`,
      headers: params.headers,
      data: data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
