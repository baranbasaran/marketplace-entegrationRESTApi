const axios = require('axios');
const claimData = require('../Utils/claimData');
module.exports = async function (params, data) {
  data = await claimData();
  try {
    const response = await axios({
      method: 'post',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/claims/create`,
      headers: params.headers,
      data: data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
