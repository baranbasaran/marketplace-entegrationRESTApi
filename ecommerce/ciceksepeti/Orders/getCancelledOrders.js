const axios = require('axios');
const subUrl = 'Order/getcanceledorders';
module.exports = async function (params, filters) {
  let url = `${params.url}${subUrl}`;
  try {
    const response = await axios(
      {
        method:'post',
        url:url,
        headers:params.headers,
        data:filters
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
