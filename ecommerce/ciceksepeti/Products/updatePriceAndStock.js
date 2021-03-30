const axios = require('axios');
const ciceksepetiDatas = require('../Utils/ciceksepetiDatas');
const subUrl = 'Products';
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = require('../Example/data.json');
  const postData = await ciceksepetiDatas(data.products, 'stock-and-price');
  console.log(postData);
  try {
    const response = await axios({
      method: 'put',
      url: url,
      headers: params.headers,
      data: postData,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
