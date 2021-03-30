const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });
module.exports = async function (payload) {
    const { decision } = payload;
    console.log(payload);
    console.log(decision);
    if (decision == "accept") {
        const acceptedOrderItems = await getAcceptedOrderItems(payload);
        return acceptedOrderItems;
    }
    const rejectedOrderItems = await getRejectedOrderItems(payload);
    return rejectedOrderItems;
};

async function getAcceptedOrderItems(payload) {
    const { orderItemId, numberOfPackage } = payload;

    const response = await axios({
        method: "post",
        url: "https://api.n11.com/ws/OrderService.wsdl",
        headers: {
            "Content-Type": "text/xml;charset=UTF-8",
        },
        data: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.n11.com/ws/schemas">
<soapenv:Header/>
<soapenv:Body>
  <sch:OrderItemAcceptRequest>
         <auth>
            <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
            <appSecret>txiPXUC3o811lioM</appSecret>
         </auth>
         <orderItemList>
            <orderItem>
               <id>${orderItemId}</id>
            </orderItem>
         </orderItemList>
	    <numberOfPackages>${numberOfPackage}</numberOfPackages>
      </sch:OrderItemAcceptRequest>
</soapenv:Body>
</soapenv:Envelope>`.trim(),
    }).data;
    console.log(response);
    return new Promise((resolve, reject) => {
        parser.parseString(response, (error, result) => {
            if (error) return reject(error);
            resolve(
                result["env:Envelope"]["env:Body"][
                    "ns3:OrderItemAcceptResponse"
                ]["orderItemList"]["orderItem"]
            );
        });
    });
}

async function getRejectedOrderItems(payload) {
    const { orderItemId, rejectReason, rejectReasonType } = payload;

    const response = await axios({
        method: "post",
        url: "https://api.n11.com/ws/OrderService.wsdl",
        headers: {
            "Content-Type": "text/xml;charset=UTF-8",
        },
        data: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.n11.com/ws/schemas">
<soapenv:Header/>
<soapenv:Body>
  <sch:OrderItemRejectRequest>
         <auth>
            <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
            <appSecret>txiPXUC3o811lioM</appSecret>
         </auth>
         <orderItemList>
            <orderItem>
               <id>${orderItemId}</id>
            </orderItem>
         </orderItemList>
         <rejectReason>${rejectReason}<rejectReason>
         <rejectReasonType>${rejectReasonType}</rejectReasonType>
      </sch:OrderItemRejectRequest>
</soapenv:Body>
</soapenv:Envelope>`.trim(),
    }).data;

    return new Promise((resolve, reject) => {
        parser.parseString(response, (result, error) => {
            if (error) return reject(error);

            resolve(
                result["env:Envelope"]["env:Body"][
                    "ns3:OrderItemRejectResponse"
                ]["orderItemList"]["orderItem"]
            );
        });
    });
}
