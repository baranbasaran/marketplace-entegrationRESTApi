const axios = require('axios');
module.exports = async function (page, size) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/brands?size=${size}&page=${page}`,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
