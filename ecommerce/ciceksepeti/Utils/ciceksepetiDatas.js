/**
 *
 * @param {Object} data
 * @param {String} type
 * 
 * Sample Data
 * {
{
  "products": [
    {
      "productName": "Test Urunu",
      "mainProductCode": "testmain2",
      "stockCode": "test2",
      "categoryId": 13349,
      "description": "test acıklaması",
      "mediaLink": "test",
      "deliveryMessageType": 4,
      "deliveryType": 3,
      "stockQuantity": 25,
      "salesPrice": 56.99,
      "listPrice": 99.99,
      "barcode": "test123",
      "images": [
        "test-test-kc6500945-1-392bf4631cf04904a3f0df31a6c10642.jpg"
      ],
      "attributes": [
        {
          "id": 2000353,
          "valueId": 2010697,
          "textLength": 0
        },
        {
          "id": 13,
          "valueId": 143,
          "textLength": 0
        }, 
        {
          "id": 3,
          "valueId": 191,
          "textLength": 25
        }
      ]
    }
  ]
}
}

 */

module.exports = async function (data, process) {
  let products = [];
  let i = {};
  let product = data;
  if (Array.isArray(data)) {
    for (const product of data) {
      if (process === 'create') {
        i = {
          productName: product.productName, // Ürün Adı
          mainProductCode: product.mainProductCode, // Tedarikçi ürün kodu
          stockCode: product.stockCode, // Tedarikçi varyant kodu
          categoryId: product.categoryId, // Kategori Id (Servisten)
          description: product.description, // Ürün/varyant açıklaması
          deliveryMessageType: product.deliveryMessageType, // Teslimat aralığı
          deliveryType: product.deliveryType, // Teslimat tipi
          stockQuantity: product.stockQuantity, // Ürün stok adedi
          salesPrice: product.salesPrice, // Satış fiyatı
          images: product.images, // ['url','url'] Ürün/varyant görseli
          attributes: product.attributes, //  [{id:"(Servisten)",valueId:"(Servisten)",textLength:(Kisiye Ozel Limit)}]
        };
        if (product.mediaLink !== undefined) i.mediaLink = product.mediaLink; // Ürün/varyant ile ilgili video linki (youtube). imaj linki gönderilmemelidir.
        if (product.barcode !== undefined) i.barcode = product.barcode; // Ürün Barkodu
        if (product.listPrice !== undefined) i.listPrice = product.listPrice; // Üstü çizili fiyat
      } else if (process === 'stock-and-price') {
        i = {
          stockCode: product.stockCode, // Ürün Stok Kodu
        };
        if (product.stockQuantity !== undefined)
          i.stockQuantity = product.stockQuantity * 2;
        if (product.salesPrice !== undefined)
          i.salesPrice = product.salesPrice * 0.9;
        if (product.listPrice !== undefined)
          i.listPrice = product.listPrice * 0.9;
      } else if (process === 'store-stock-and-price') {
        i = {
          barcode: item.barcode, // Urun Barkodu (Fiyat Guncellemesi icin kullanilir)
          quantity: item.quantity, // Stok Miktari
          currencyType: item.currencyType, // Para Birimi (TRY | EUR | USD)
          listPrice: item.listPrice, // Liste Fiyati Indirimsiz
          salePrice: item.salePrice, // Satis Fiyati Indirimli
        };
      } else {
        i = {
          productName: product.productName,
          mainProductCode: product.mainProductCode,
          stockCode: product.stockCode,
          isActive: product.isActive,
          description: product.description,
          deliveryMessageType: product.deliveryMessageType,
          deliveryType: product.deliveryType,
          images: product.images,
        };
        if (product.mediaLink !== undefined) i.mediaLink = product.mediaLink;
        if (product.barcode !== undefined) i.barcode = product.barcode;
        if (product.attributes !== undefined) i.attributes = product.attributes;
      }
      products.push(i);
    }
  } else {
    if (process === 'create') {
      i = {
        productName: product.productName, // Ürün Adı
        mainProductCode: product.mainProductCode, // Tedarikçi ürün kodu
        stockCode: product.stockCode, // Tedarikçi varyant kodu
        categoryId: product.categoryId, // Kategori Id (Servisten)
        description: product.description, // Ürün/varyant açıklaması
        deliveryMessageType: product.deliveryMessageType, // Teslimat aralığı
        deliveryType: product.deliveryType, // Teslimat tipi
        stockQuantity: product.stockQuantity, // Ürün stok adedi
        salesPrice: product.salesPrice, // Satış fiyatı
        images: product.images, // ['url','url'] Ürün/varyant görseli
        attributes: product.attributes, //  [{id:"(Servisten)",valueId:"(Servisten)",textLength:(Kisiye Ozel Limit)}]
      };
      if (product.mediaLink !== undefined) i.mediaLink = product.mediaLink; // Ürün/varyant ile ilgili video linki (youtube). imaj linki gönderilmemelidir.
      if (product.barcode !== undefined) i.barcode = product.barcode; // Ürün Barkodu
      if (product.listPrice !== undefined) i.listPrice = product.listPrice; // Üstü çizili fiyat};
    } else if (process === 'stock-and-price') {
      i = {
        stockCode: product.stockCode, // Ürün Stok Kodu
      };
      if (product.stockQuantity !== undefined)
        i.stockQuantity = product.stockQuantity * 2;
      if (product.salesPrice !== undefined)
        i.salesPrice = product.salesPrice * 0.9;
      if (product.listPrice !== undefined)
        i.listPrice = product.listPrice * 0.9;
    } else {
      i = {
        productName: product.productName,
        mainProductCode: product.mainProductCode,
        stockCode: product.stockCode,
        isActive: product.isActive,
        description: product.description,
        deliveryMessageType: product.deliveryMessageType,
        deliveryType: product.deliveryType,
        images: product.images,
      };
      if (product.mediaLink !== undefined) i.mediaLink = product.mediaLink;
      if (product.barcode !== undefined) i.barcode = product.barcode;
      if (product.attributes !== undefined) i.attributes = product.attributes;
    }
    products.push(i);
  }
  return { products };
};
