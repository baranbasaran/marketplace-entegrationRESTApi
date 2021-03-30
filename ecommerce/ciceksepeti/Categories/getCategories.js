const axios = require('axios');
const subUrl = 'Categories';
module.exports = async function (params) {
  let url = `${params.url}${subUrl}`;
  console.log(url);
  console.log(params);
  try {
    const response = await axios({
      method: 'get',
      url: url,
      headers: params.headers,
    });
    return response.data;
  } catch (e) {
    return console.log(e);
  }
};
