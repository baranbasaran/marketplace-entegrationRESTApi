const axios = require("axios");
const subUrl = "Order/statusupdatewithsupplierintegration";
module.exports = async function (params, data) {
  let url = `${params.url}${subUrl}`;
  data = {
    orderItems: [
      {
        orderItemId: 12345,
        orderItemStatusId: 11,
        cargoBusinessId: 1,
        shipmentNumber: "1700000004567",
        shipmentTrackingUrl: "https://www.ciceksepeti.com/",
        receiverName: "test isim",
        deliveryTime: "2020-01-01T08:17:48.809Z",
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
