const axios = require("axios");
const subUrl = "Order/cancelevaluation";
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = {
    orderItemId: 67890,
    process: 1,
  };
  try {
    const response = await axios({
      method: "post",
      url: url,
      headers: params.headers,
      data: data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
