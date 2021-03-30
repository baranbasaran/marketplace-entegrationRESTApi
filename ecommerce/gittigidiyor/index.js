const CryptoJS = require("crypto-js");
const getCategories = require("./categoryService/getCategories");
const getCategoriesByCodes = require("./categoryService/getCategoriesByCodes");
const getRequiredCategorySpecs = require("./categoryService/getRequiredCategorySpecs");
const getCategorySpecs = require("./categoryService/getCategorySpecs");
const createProducts = require("./productService/createProducts");
const updatePrice = require("./productService/updatePrice");
const updateStock = require("./productService/updateStock");
const updateVariantStock = require("./productService/updateVariantStock");
const updateMarketPrice = require("./productService/updateMarketPrice");
const updateProducts = require("./productService/updateProducts");
const updateProductVariants = require("./productService/updateProductVariants");
const getProducts = require("./productService/getProducts");
const getSale = require("./saleService/getSale");
const replyOrRate = require("./saleService/replyOrRate");
const getCancelSale = require("./saleService/cancelSale");
const giveApproval = require("./saleService/giveApproval");
const transactions = require("./saleService/transactions");
const getReasons = require("./saleService/getReasons");
const getItemBuyers = require("./saleService/getItemBuyers");
const removeSaleFromList = require("./saleService/removeSaleFromList");

class Gittigidiyor {
  #DEVELOPER_ID = "DEVELOPER_ID";
  #ROLENAME = "ROLENAME";
  #ROLE_PASSWORD = "ROLE_PASSWORD";
  #API_KEY = "API_KEY";
  #SECRET_KEY = "SECRET_KEY";
  header = {};
  constructor() {
    this.headers = {
      "Content-Type": "text/xml",
      Authorization: `Basic ${Buffer.from(
        this.#ROLENAME + ":" + this.#ROLE_PASSWORD,
        "utf8"
      ).toString("base64")}`,
    };
    return this;
  }
  getParams() {
    let time = new Date().getTime();
    return {
      headers: this.headers,
      apiKey: this.#API_KEY,
      secretKey: this.#SECRET_KEY,
      sign: CryptoJS.MD5(this.#API_KEY + this.#SECRET_KEY + time).toString(),
      time: time,
    };
  }
  async getItemBuyers(data) {
    return await getItemBuyers(this.getParams(), data);
  }
  async removeSaleFromList(data) {
    return await removeSaleFromList(this.getParams(), data);
  }
  async getReasons(data) {
    return await getReasons(this.getParams(), data);
  }
  async transactions(data) {
    return await transactions(this.getParams(), data);
  }
  async giveApproval(data) {
    return await giveApproval(this.getParams(), data);
  }
  async getSale(data) {
    return await getSale(this.getParams(), data);
  }
  async getCancelSale(data) {
    return await getCancelSale(this.getParams(), data);
  }
  async getProducts(data) {
    return await getProducts(this.getParams(), data);
  }

  async getCategories(page, size) {
    return await getCategories(this.getParams(), page, size);
  }

  async getCategoriesByCodes(categoryCode) {
    return await getCategoriesByCodes(this.getParams(), categoryCode);
  }
  async replyOrRate(data) {
    return await replyOrRate(this.getParams(), data);
  }

  async createProducts(data) {
    return await createProducts(this.getParams(), data);
  }

  async updatePrice(data) {
    return await updatePrice(this.getParams(), data);
  }

  async updateStock(data) {
    return await updateStock(this.getParams(), data);
  }

  async updateVariantStock(data) {
    return await updateVariantStock(this.getParams(), data);
  }
  async updateMarketPrice(data) {
    return await updateMarketPrice(this.getParams(), data);
  }
  async updateProducts(data) {
    return await updateProducts(this.getParams(), data);
  }

  async updateProductVariants(data) {
    return await updateProductVariants(this.getParams(), data);
  }
  /*Katalog yapısına sahip kategoriler için ürün girişi yaparken "newCatalogId" girişi zorunlu kılınmıştır.
 Bu metot listeleme yapılmak istenen kategoride "newCatalogId" 
 girişinin zorunlu olup olmadığı bilgisine ulaşmak için kullanılır.*/
  async getRequiredCategorySpecs(categoryCode) {
    return await getRequiredCategorySpecs(this.getParams(), categoryCode);
  }
  /*GittiGidiyor'da bulunan kategori bilgilerini içerir. Bir ürün listeleyebilmek için
   bu servisten alınacak kategori kodunun kullanılması gerekir. 
   Kategori servisi aynı zamanda bir kategori içerisinde listelenecek ürünün
    teknik özelliklerinin hazır olarak verilmesini sağlar.*/
  async getCategorySpecs(categoryCode) {
    return await getCategorySpecs(this.getParams(), categoryCode);
  }
}

module.exports = new Gittigidiyor();
