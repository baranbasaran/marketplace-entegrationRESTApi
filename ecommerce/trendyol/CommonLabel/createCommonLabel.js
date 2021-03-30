const axios = require('axios');
module.exports = async function (params, cargoTrackingNumber) {
  try {
    const response = await axios({
      method: 'post',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/common-label/${cargoTrackingNumber}?format=ZPL`,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
