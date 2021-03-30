const axios = require('axios');
module.exports = async function (params, filters) {
  let url = `https://api.trendyol.com/sapigw/suppliers/${params.sellerId}/questions/filter?`;
  filter = '';
  for (const [k, v] of Object.entries(filters)) {
    filter += `${k}=${v}&`;
  }
  url += filter;
  url = url.substring(0, url.length - 1);
  try {
    const response = await axios({
      method: 'get',
      url: url,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
