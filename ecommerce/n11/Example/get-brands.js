const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });

module.exports = async function (payload) {
    const brands = await getBrands(payload);

    return brands;
};

async function getBrands(payload, categoryId) {
    const { size, page } = payload;

    const response = (
        await axios({
            method: "post",
            url: "https://api.n11.com/ws/categoryService/",
            headers: {
                "Content-Type": "text/xml;charset=UTF-8",
            },
            data: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sch="http://www.n11.com/ws/schemas">
    <soapenv:Header/>
    <soapenv:Body>
        <sch:GetCategoryAttributesRequest>
            <auth>
                <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
                <appSecret>txiPXUC3o811lioM</appSecret>
            </auth>
            <categoryId>${categoryId}</categoryId>
            <pagingData>
                <currentPage>${page}</currentPage>
                <pageSize>${size}</pageSize>
            </pagingData>
    </sch:GetCategoryAttributesRequest>
    </soapenv:Body>
</soapenv:Envelope>
        `.trim(),
        })
    ).data;
    return new Promise((resolve, reject) => {
        parser.parseString(response, (error, result) => {
            if (error) return reject(error);
            resolve(
                result["env:Envelope"]["env:Body"][
                    "ns3:GetCategoryAttributesResponse"
                ]["category"]["attributeList"]["attribute"]["valueList"]
            );
        });
    });
}
