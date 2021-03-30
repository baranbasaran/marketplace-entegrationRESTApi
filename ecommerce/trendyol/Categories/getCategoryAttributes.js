const axios = require('axios');
module.exports = async function (categoryId) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
