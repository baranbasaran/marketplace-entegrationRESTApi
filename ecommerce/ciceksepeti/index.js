const getCategories = require("./Categories/getCategories");
const getCategoryAttributes = require("./Categories/getCategoryAttributes");
const getProducts = require("./Products/getProducts");
const createProducts = require("./Products/createProducts");
const updateProducts = require("./Products/updateProducts");
const updatePriceAndStock = require("./Products/updatePriceAndStock");
const getBatchRequestResult = require("./Utils/getBatchRequestResult");
const getOrders = require("./Orders/getOrders");
const cargoCiceksepeti = require("./Orders/cargoCiceksepeti");
const cargoIntegration = require("./Orders/cargoIntegration");
const cargoCiceksepetiIntegration = require("./Orders/cargoCiceksepetiIntegration");
const returnDelivered = require("./Orders/returnDelivered");
const getAllowances = require("./Branch/getAllowances");
const getCancelledOrders = require("./Orders/getCancelledOrders");

class Ciceksepeti {
  #TEST_API_KEY = "TEST_API_KEY";
  #PROD_API_KEY = "PROD_API_KEY";
  #SUPPILIER_ID = "SUPPILIER_ID";
  #TEST_URL = "https://sandbox-apis.ciceksepeti.com/api/v1/";
  #PROD_URL = "https://apis.ciceksepeti.com/api/v1/";
  constructor() {
    return this;
  }
  getParams(prod = 1) {
    if (prod) {
      return {
        url: this.#PROD_URL,
        headers: { "x-api-key": this.#PROD_API_KEY },
      };
    }
    return {
      url: this.#TEST_URL,
      headers: { "x-api-key": this.#TEST_API_KEY },
    };
  }
  async getProducts(filters) {
    return await getProducts(this.getParams(), filters);
  }
  async createProducts(data) {
    return await createProducts(this.getParams(), data);
  }
  async createProducts(data) {
    return await createProducts(this.getParams(), data);
  }
  async updateProducts(data) {
    return await updateProducts(this.getParams(), data);
  }
  async updatePriceAndStock(data) {
    return await updatePriceAndStock(this.getParams(), data);
  }
  async getBatchRequestResult(batchRequestId) {
    return await getBatchRequestResult(this.getParams(), batchRequestId);
  }
  async getCategories() {
    return await getCategories(this.getParams());
  }
  async getCategoryAttributes(categoryId) {
    return await getCategoryAttributes(this.getParams(), categoryId);
  }
  async getOrders(filters) {
    return await getOrders(this.getParams(), filters);
  }
  async getAllowances(filters) {
    return await getAllowances(this.getParams(), filters);
  }
  async getCancelledOrders(filters) {
    return await getCancelledOrders(this.getParams(), filters);
  }
  async cargoCiceksepeti(data) {
    return await cargoCiceksepeti(this.getParams(), data);
  }
  async cargoIntegration(data) {
    return await cargoIntegration(this.getParams(), data);
  }
  async cargoCiceksepetiIntegration(data) {
    return await cargoCiceksepetiIntegration(this.getParams(), data);
  }
  async returnDelivered(data) {
    return await returnDelivered(this.getParams(), data);
  }
  async returnUpdate(data) {
    return await returnUpdate(this.getParams(), data);
  }
}

module.exports = new Ciceksepeti();
