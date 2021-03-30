const axios = require('axios');
module.exports = async function (name) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.trendyol.com/sapigw/brands/by-name?name=${name}`,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
