const axios = require('axios');
module.exports = async function (params) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/addresses`,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
