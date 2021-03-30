const axios = require("axios");
const subUrl = "Order/statusupdatewithcsintegration";
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = {
    orderItems: [
      {
        orderItemId: 123456,
        partialNumber: "123456-10",
      },
    ],
  };
  try {
    const response = await axios({
      method: "put",
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
