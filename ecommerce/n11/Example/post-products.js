const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });
/* NOT : createProduct yapmak için en alt seviyedeki kategori ID bilgisi kullanılmalıdır. 
Seçtiğiniz kategorinin alt kategorileri var ise (leaf:true) bu kategori bilgisi ile ürün aktarımı yapamazsınız*/
module.exports = async function (payload) {
    const product = n11Data(payload);
    let obj = {
        "soapenv:Envelope": {
            $: {
                "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                "xmlns:sch": "http://www.n11.com/ws/schemas",
            },
            "soapenv:Header": {},
            "soapenv:Body": {
                "sch:SaveProductRequest": {
                    auth: {
                        appKey: "b6b984bb-19bd-49b8-8ff1-50524dfffac7",
                        appSecret: "txiPXUC3o811lioM",
                    },
                    product,
                },
            },
        },
    };

    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    const response = await postProducts(xml);
    return response;
};

async function postProducts(payload) {
    console.log(payload);
    const response = await {
        method: "post",
        url: "https://api.n11.com/ws/ProductService.wsdl",
        headers: {
            "Content-Type": "text/xml",
        },
        data: payload,
    };
    const finalResponse = await getResponse(response.data);
    return finalResponse;
}
function n11Data(params) {
    var attributes = [];
    const {
        salePrice: price,
        currencyType: currencyType,
        title: title,
        stockCode: sellerStockCode,
        description: description,
        productSellerCode,
        productCondition,
        preparingDay,
        shipmentTemplate,
        subtitle,
        ...rest
    } = params.items[0];
    for (const item of rest.attributes) {
        attributes.push({
            name: item.attributeName,
            value: item.attributeValueName,
        });
    }
    return {
        price,
        currencyType,
        title,
        description,
        category: {
            id: rest.categoryId,
        },
        images: {
            image: rest.images,
        },
        stockItems: {
            stockItem: {
                sellerStockCode,
                attributes: attributes,
            },
        },
        optionPrice: rest.listPrice,
        productSellerCode,
        productCondition,
        preparingDay,
        shipmentTemplate,
        subtitle,

        // subtitle,
        // productCondition,
        // preparingDay,
        // shipmentTemplate,
    };
}
async function getResponse(xml) {
    return new Promise((resolve, reject) => {
        parser.parseString(xml, (error, result) => {
            if (error) return reject(error);
            console.log(result);
            resolve(result);
        });
    });
}
