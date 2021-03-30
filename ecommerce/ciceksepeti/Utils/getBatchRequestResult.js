const axios = require('axios');
const subUrl = 'Products/batch-status/';
module.exports = async function (params, batchRequestId) {
  let url = `${params.url}${subUrl}`;
  try {
    const response = await axios({
      method: 'get',
      url: url + `${batchRequestId}`,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
