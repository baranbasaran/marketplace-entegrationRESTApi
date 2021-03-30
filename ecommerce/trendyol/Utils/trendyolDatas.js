/**
 * 
 * @param {*} data 
 * @param {*} process 
 * process update
 *  {
        "items": [
            {
                "barcode": "barkod-1234",
                "title": "Bebek Takımı Pamuk",
                "productMainId": "1234BT",
                "brandId": 1791,
                "categoryId": 411,
                "stockCode": "STK-123",
                "dimensionalWeight": 12,
                "description": "Ürün açıklama bilgisi",
                "vatRate": 0,
                "images": [
                    {
                        "url": "https://www.sampleadress/path/folder/image_1.jpg"
                    }
                ],
                "attributes": [
                    {
                        "attributeId": 338,
                        "attributeValueId": 6980
                    },
                    {
                        "attributeId": 343,
                        "attributeValueId": 4294
                    },
                    {
                        "attributeId": 47,
                        "customAttributeValue": "Attribute özelliği(text olarak girebilirsiniz.)"
                    }
                ],
                "cargoCompanyId": 10,
                "shipmentAddressId": 0,
                "returningAddressId": 0
            }
        ]
    }
 */


module.exports = async function(data, process){
    let items = [];
    let i = {};
    if(Array.isArray(data)){
        for(const item of data){
            if(process === "create"){
                i = {
                    barcode:item.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    title:item.title,                              // Urun Basligi
                    productMainId:item.productMainId,              // Ana Urun Kodu Varyantlilarda ayni kalmali
                    brandId:item.brandId,                          // Marka ID (Servisten)
                    categoryId:item.categoryId,                    // Kategori ID (Servisten)
                    quantity:item.quantity,                        // Stok Miktari
                    stockCode:item.stockCode,                      // Api Stok Kodu
                    dimensionalWeight:item.dimensionalWeight,      // Desi Agirligi
                    description:item.description,                  // Urun Aciklama
                    currencyType:item.currencyType,                // Para Birimi (TRY | EUR | USD)
                    listPrice:item.listPrice,                      // Liste Fiyati Indirimsiz
                    salePrice:item.salePrice,                      // Satis Fiyati Indirimli
                    vatRate:item.vatRate,                          // Vergi Orani (0 | 1 | 8 | 18)
                    cargoCompanyId:item.cargoCompanyId,            // Kargo Id (Servisten)
                    shipmentAddressId:item.shipmentAddressId,      // Gonderim Depo Id (Servisten)
                    returningAddressId:item.returningAddressId,    // Iade Depo Id (Servisten)
                    deliveryDuration:item.deliveryDuration,        // Sevkiyat Suresi
                    images:item.images,                            // [{url:''},{url:''}] Urun gorseller maks 8 gorsel https olmali
                    attributes:item.attributes,                    // [{attributeId:"(Servisten)",attributeValueId:"(Servisten)"}]
                };
            }
            else if (process === "stock-and-price"){
                i = {
                    barcode:item.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    quantity:item.quantity*2,                        // Stok Miktari
                    currencyType:item.currencyType,                // Para Birimi (TRY | EUR | USD)
                    listPrice:item.listPrice*0.9,                      // Liste Fiyati Indirimsiz
                    salePrice:item.salePrice*0.9,                      // Satis Fiyati Indirimli
                };
            }
            else if (process === "store-stock-and-price"){
                i = {
                    barcode:item.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    quantity:item.quantity,                        // Stok Miktari
                    currencyType:item.currencyType,                // Para Birimi (TRY | EUR | USD)
                    listPrice:item.listPrice,                      // Liste Fiyati Indirimsiz
                    salePrice:item.salePrice,                      // Satis Fiyati Indirimli
                };
            }
            else{
                i = {
                    barcode:item.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    title:item.title,                              // Urun Basligi
                    productMainId:item.productMainId,              // Ana Urun Kodu Varyantlilarda ayni kalmali
                    brandId:item.brandId,                          // Marka ID (Servisten)
                    categoryId:item.categoryId,                    // Kategori ID (Servisten)
                    stockCode:item.stockCode,                      // Api Stok Kodu
                    dimensionalWeight:item.dimensionalWeight,      // Desi Agirligi
                    description:item.description+" guncelle",                  // Urun Aciklama
                    vatRate:item.vatRate,                          // Vergi Orani (0 | 1 | 8 | 18)
                    deliveryDuration:item.deliveryDuration,        // Sevkiyat Suresi
                    cargoCompanyId:item.cargoCompanyId,            // Kargo Id (Servisten)
                    shipmentAddressId:item.shipmentAddressId,      // Gonderim Depo Id (Servisten)
                    returningAddressId:item.returningAddressId,    // Iade Depo Id (Servisten)
                    images:item.images,                            // [{url:''},{url:''}] Urun gorseller maks 8 gorsel https olmali
                    attributes:item.attributes,                    // [{attributeId:"(Servisten)",attributeValueId:"(Servisten)"}]
                };
            }
            items.push(i);
        }
    }
    else{
            if(process === "create"){
                i = {
                    barcode:data.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    title:data.title,                              // Urun Basligi
                    productMainId:data.productMainId,              // Ana Urun Kodu Varyantlilarda ayni kalmali
                    brandId:data.brandId,                          // Marka ID (Servisten)
                    categoryId:data.categoryId,                    // Kategori ID (Servisten)
                    quantity:data.quantity,                        // Stok Miktari
                    stockCode:data.stockCode,                      // Api Stok Kodu
                    dimensionalWeight:data.dimensionalWeight,      // Desi Agirligi
                    description:data.description,                  // Urun Aciklama
                    currencyType:data.currencyType,                // Para Birimi (TRY | EUR | USD)
                    listPrice:data.listPrice,                      // Liste Fiyati Indirimsiz
                    salePrice:data.salePrice,                      // Satis Fiyati Indirimli
                    vatRate:data.vatRate,                          // Vergi Orani (0 | 1 | 8 | 18)
                    cargoCompanyId:data.cargoCompanyId,            // Kargo Id (Servisten)
                    shipmentAddressId:data.shipmentAddressId,      // Gonderim Depo Id (Servisten)
                    returningAddressId:data.returningAddressId,    // Iade Depo Id (Servisten)
                    deliveryDuration:data.deliveryDuration,        // Sevkiyat Suresi
                    images:data.images,                            // [{url:''},{url:''}] Urun gorseller maks 8 gorsel https olmali
                    attributes:data.attributes,                    // [{attributeId:"(Servisten)",attributeValueId:"(Servisten)"}]
                };
            }
            else if (process === "stock-and-price"){
                i = {
                    barcode:data.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    quantity:data.quantity*2,                        // Stok Miktari
                    currencyType:data.currencyType,                // Para Birimi (TRY | EUR | USD)
                    listPrice:data.listPrice*0.9,                      // Liste Fiyati Indirimsiz
                    salePrice:data.salePrice*0.9,                      // Satis Fiyati Indirimli
                };
            }
            else{
                i = {
                    barcode:data.barcode,                          // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
                    title:data.title,                              // Urun Basligi
                    productMainId:data.productMainId,              // Ana Urun Kodu Varyantlilarda ayni kalmali
                    brandId:data.brandId,                          // Marka ID (Servisten)
                    categoryId:data.categoryId,                    // Kategori ID (Servisten)
                    stockCode:data.stockCode,                      // Api Stok Kodu
                    dimensionalWeight:data.dimensionalWeight,      // Desi Agirligi
                    description:data.description+" guncelle",                  // Urun Aciklama
                    vatRate:data.vatRate,                          // Vergi Orani (0 | 1 | 8 | 18)
                    deliveryDuration:data.deliveryDuration,        // Sevkiyat Suresi
                    cargoCompanyId:data.cargoCompanyId,            // Kargo Id (Servisten)
                    shipmentAddressId:data.shipmentAddressId,      // Gonderim Depo Id (Servisten)
                    returningAddressId:data.returningAddressId,    // Iade Depo Id (Servisten)
                    images:data.images,                            // [{url:''},{url:''}] Urun gorseller maks 8 gorsel https olmali
                    attributes:data.attributes,                    // [{attributeId:"(Servisten)",attributeValueId:"(Servisten)"}]
                };
            }
        items.push(i);
    }
    return {items};
}