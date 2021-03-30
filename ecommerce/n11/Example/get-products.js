const axios = require("axios");

module.exports = async function (payload) {
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
        <sch:GetProductListRequest>
            <auth>
                <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
                <appSecret>txiPXUC3o811lioM</appSecret>
            </auth>
            <pagingData>
            <currentPage>${page}</currentPage>
            <pageSize>${size}</pageSize>
            </pagingData>
        </sch:GetProductListRequest>
    </soapenv:Body>
</soapenv:Envelope>`.trim(),
        })
    ).data;

    return response;
};
