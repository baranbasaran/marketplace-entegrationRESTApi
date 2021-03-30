const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });

module.exports = async function () {
    const shipments = await getShipments();
    return shipments;
};

async function getShipments() {
    const response = (
        await axios({
            method: "post",
            url: "https://api.n11.com/ws/shipmentCompanyService.wsdl/",
            headers: {
                "Content-Type": "text/xml;charset=UTF-8",
            },
            data: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.n11.com/ws/schemas">
    <soapenv:Header/>
    <soapenv:Body>
        <sch:GetShipmentCompaniesRequest/>
    </soapenv:Body>
</soapenv:Envelope>`.trim(),
        })
    ).data;
    console.log(response);
    return new Promise((resolve, reject) => {
        console.log(response);
        parser.parseString(response, (error, result) => {
            if (error) return reject(error);
            resolve(
                result["env:Envelope"]["env:Body"][
                    "ns3:GetShipmentCompaniesResponse"
                ]["shipmentCompanies"]["shipmentCompany"]
            );
        });
    });
}
