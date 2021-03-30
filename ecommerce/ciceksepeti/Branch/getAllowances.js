const axios = require('axios');
const subUrl = 'Branch/GetAllowances';
module.exports = async function (params, filters) {
  let url = `${params.url}${subUrl}`;
  try {
    const response = await axios({
      method: 'post',
      url: url,
      headers: params.headers,
      data: filters,
    });
    //console.log(response);
    return response.data;
  } catch (e) {
    return e;
  }
};
