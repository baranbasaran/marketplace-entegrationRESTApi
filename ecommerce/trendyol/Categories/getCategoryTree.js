const axios = require('axios');
module.exports = async function () {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/product-categories`,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
