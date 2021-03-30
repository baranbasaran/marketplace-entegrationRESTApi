const axios = require('axios');
module.exports = async function (params, questionId) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/questions/${questionId}`,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
