const axios = require('axios');
const trendyolDatas = require('./trendyolDatas');
module.exports = async function (params, batchRequestId) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/products/batch-requests/${batchRequestId}`,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
