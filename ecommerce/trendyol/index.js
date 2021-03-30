const getSuppliersAddresses = require('./Suppliers/getSuppliersAddresses');
const getProviders = require('./Orders/getProviders');
const getBrands = require('./Brands/getBrands');
const getBrandsName = require('./Brands/getBrandsName');
const getCategoryTree = require('./Categories/getCategoryTree');
const getCategoryAttributes = require('./Categories/getCategoryAttributes');
const createProducts = require('./Products/createProducts');
const updateProducts = require('./Products/updateProducts');
const getBatchRequestResult = require('./Utils/getBatchRequestResult');
const filterProducts = require('./Products/filterProducts');
const updatePriceAndInventory = require('./Products/updatePriceAndInventory');
const getOrdersShipmentPackages = require('./Orders/getShipmentPackages');
const getClaimsShipmentPackages = require('./Claims/getClaims');
const createCommonLabel = require('./CommonLabel/createCommonLabel');
const getCommonLabel = require('./CommonLabel/getCommonLabel');
const filterSettlements = require('./Settlements/filterWithDateValidationConstraint');
const getOrderStatus = require('./Utils/Orders');
const getClaimStatus = require('./Utils/CustomerClaimItemResponse');
const getQuestions = require('./Questions/getQuestions');
const getQuestionById = require('./Questions/getQuestionById');

class Trendyol {
  static sellerId = 'sellerId';
  #username = 'username';
  #password = 'password';
  #entegrator = 'SelfIntegration';
  static requestLimit = 50;
  static requestLimitSeconds = 10;
  static getOrdersMaxSize = 50;
  static getOrdersMaxPage = 10000;
  header = {};
  constructor() {
    this.headers = {
      Authorization:
        'Basic ' +
        Buffer.from(this.#username + ':' + this.#password, 'utf8').toString(
          'base64'
        ),
      'User-Agent': `${Trendyol.sellerId} - ${this.#entegrator}`,
    };
    return this;
  }
  getParams() {
    return { sellerId: Trendyol.sellerId, headers: this.headers };
  }
  async getSuppliersAddresses() {
    return await getSuppliersAddresses(this.getParams());
  }
  async getProviders() {
    return await getProviders();
  }
  async getBrands(page, size) {
    return await getBrands(page, size);
  }
  async getBrandsName(name) {
    return await getBrandsName(name);
  }
  async getCategoryTree() {
    return await getCategoryTree();
  }
  async getCategoryAttributes(categoryId) {
    return await getCategoryAttributes(categoryId);
  }
  async createProducts(data) {
    return await createProducts(this.getParams(), data);
  }
  async updateProducts(data) {
    return await updateProducts(this.getParams(), data);
  }
  async getBatchRequestResult(batchRequestId) {
    return await getBatchRequestResult(this.getParams(), batchRequestId);
  }
  async filterProducts(filters) {
    return await filterProducts(this.getParams(), filters);
  }
  async updatePriceAndInventory(data) {
    return await updatePriceAndInventory(this.getParams(), data);
  }
  async getOrdersShipmentPackages(
    filters,
    order = {
      orderByField: 'PackageLastModifiedDate',
      orderByDirection: 'DESC',
    }
  ) {
    return await getOrdersShipmentPackages(this.getParams(), {
      ...filters,
      ...order,
    });
  }
  async getClaimsShipmentPackages(filters) {
    return await getClaimsShipmentPackages(this.getParams(), filters);
  }
  async createCommonLabel(cargoTrackingNumber) {
    return await createCommonLabel(this.getParams(), cargoTrackingNumber);
  }
  async getCommonLabel(cargoTrackingNumber) {
    return await getCommonLabel(this.getParams(), cargoTrackingNumber);
  }
  async getFilterSettlements(filters) {
    return await filterSettlements(this.getParams(), filters);
  }
  async getQuestions(filters) {
    return await getQuestions(this.getParams(), filters);
  }
  async getQuestionById(questionId) {
    return await getQuestionById(this.getParams(), questionId);
  }
  getOrderStatus() {
    return getOrderStatus;
  }
  getClaimStatus() {
    return getClaimStatus;
  }
}

module.exports = new Trendyol();
