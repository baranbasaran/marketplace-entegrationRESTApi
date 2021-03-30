const axios = require('axios');
const subUrl = 'Categories';
module.exports = async function (params, categoryId) {
  let url = `${params.url}${subUrl}/${categoryId}/attributes`;
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

