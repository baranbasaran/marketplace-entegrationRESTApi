const axios = require("axios");
const subUrl = "Order/readyforcargowithcsintegration";
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = {
    orderItemGroups: [
      {
        orderItemIds: [123456, 78901],
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
