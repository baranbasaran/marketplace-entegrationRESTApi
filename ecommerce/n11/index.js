const getProductList = require('./Products/getProductList');
const getTopLevelCategories = require('./Categories/getTopLevelCategories');
const getSubCategories = require('./Categories/getSubCategories');
const getParentCategory = require('./Categories/getParentCategory');
const getCategoryAttributes = require('./Categories/getCategoryAttributes');
const getCity = require('./Cities/getCity');
const getCities = require('./Cities/getCities');

class N11 {
  #API_KEY = '#API_KEY';
  #SECRET_KEY = '#SECRET_KEY';
  #URL = 'https://api.n11.com/ws/';
  header = {};
  constructor() {
    this.headers = {
      'Content-Type': 'text/xml',
    };
    return this;
  }
  getParams() {
    return {
      headers: this.headers,
      auth: { appKey: this.#API_KEY, appSecret: this.#SECRET_KEY },
      url: this.#URL,
    };
  }
  async getProductList(filters) {
    //return await getProductList(this.getParams(), { page: 1, size: 100 });
    return await getProductList(this.getParams(), filters);
  }
  async getTopLevelCategories() {
    return await getTopLevelCategories(this.getParams());
  }
  async getCity(cityCode) {
    return await getCity(this.getParams(), cityCode);
  }
  async getCities() {
    return await getCities(this.getParams());
  }
  async getSubCategories(categoryId) {
    return await getSubCategories(this.getParams(), categoryId);
  }
  async getParentCategory(categoryId) {
    return await getParentCategory(this.getParams(), categoryId);
  }
  async getCategoryAttributes(categoryId) {
    return await getCategoryAttributes(this.getParams(), categoryId);
  }
}

module.exports = new N11();
