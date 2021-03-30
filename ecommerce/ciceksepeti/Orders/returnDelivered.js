const axios = require("axios");
const subUrl = "Order/refundprocessstartreceivedprocess";
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = { orderItemIds: [123456, 78901] };
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
