const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });

module.exports = async function () {
    const orders = await getOrders();

    return orders;
};

async function getOrders() {
    const response = (
        await axios({
            method: "post",
            url: "https://api.n11.com/ws/OrderService.wsdl",
            headers: {
                "Content-Type": "text/xml;charset=UTF-8",
            },
            data: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.n11.com/ws/schemas">
   <soapenv:Header/>
   <soapenv:Body>
        <sch:DetailedOrderListRequest>
            <auth>
                <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
                <appSecret>txiPXUC3o811lioM</appSecret>
            </auth>
            <searchData>
                <productId></productId>
                <status></status>
                <buyerName></buyerName>
                <orderNumber></orderNumber>
                <productSellerCode></productSellerCode>
                <recipient></recipient>
                <sameDayDelivery></sameDayDelivery>
                <period>
                    <startDate>20/02/2018</startDate>
                    <endDate>21/02/2018</endDate>
                </period>
                <sortForUpdateDate>true</sortForUpdateDate>
            </searchData>
            <pagingData>
                <currentPage>0</currentPage>
                <pageSize>100</pageSize>
                <totalCount></totalCount>
                <pageCount></pageCount>
            </pagingData>
        </sch:DetailedOrderListRequest>
    </soapenv:Body>
</soapenv:Envelope>`.trim(),
        })
    ).data;
    return new Promise((resolve, reject) => {
        console.log(response);
        parser.parseString(response, (error, result) => {
            if (error) return reject(error);
            resolve(
                result["env:Envelope"]["env:Body"]["ns3:OrderListResponse"][
                    "orderList"
                ]
            );
        });
    });
}
