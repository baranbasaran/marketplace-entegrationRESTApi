const axios = require("axios");
const xml2js = require("xml2js");

const parser = xml2js.Parser({ explicitArray: false });

module.exports = async function () {
    // Get top level categories.
    const parentCategories = await getParentCategories();
    const categories = [];

    for (const parentCategory of parentCategories) {
        const item = {
            ...parentCategory,
            subCategories: [],
        };

        try {
            item.subCategories = await getSubCategories(parentCategory.id);
        } catch (error) {
            delete item.subCategories;
        }

        categories.push(item);
    }

    return categories;
};

async function getParentCategories() {
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
        <sch:GetTopLevelCategoriesRequest>
            <auth>
                <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
                <appSecret>txiPXUC3o811lioM</appSecret>
            </auth>
        </sch:GetTopLevelCategoriesRequest>
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
                    "ns3:GetTopLevelCategoriesResponse"
                ]["categoryList"]["category"]
            );
        });
    });
}

async function getSubCategories(parentCategoryId) {
    const items = [];

    for (const item of await getSubCatReq(parentCategoryId)) {
        item.subCategories = [];

        try {
            item.subCategories = await getSubCategories(item.id);
        } catch (error) {
            delete item.subCategories;
        }

        items.push(item);
    }

    return items;
}
let subCategoriesRequestCount = 0;

async function getSubCatReq(parentId) {
    if (subCategoriesRequestCount > 9) {
        subCategoriesRequestCount = 0;
        await sleep(2 * 1000);
    } else {
        subCategoriesRequestCount++;
    }

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
      <sch:GetSubCategoriesRequest>
         <auth>
            <appKey>b6b984bb-19bd-49b8-8ff1-50524dfffac7</appKey>
            <appSecret>txiPXUC3o811lioM</appSecret>
         </auth>
         <categoryId>${parentId}</categoryId>
      </sch:GetSubCategoriesRequest>
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
                    "ns3:GetSubCategoriesResponse"
                ]["category"]["subCategoryList"]["subCategory"]
            );
        });
    });
}

function sleep(ms = 15000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
