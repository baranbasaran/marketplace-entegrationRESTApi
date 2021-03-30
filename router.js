// route definitions
const router = require('@koa/router')();
const orders = require('./routes/orders');
const products = require('./routes/products');
const suppliers = require('./routes/suppliers');
const requests = require('./routes/requests');
const categories = require('./routes/categories');
const providers = require('./routes/providers');
const productsPost = require('./routes/products-post');
const productsPut = require('./routes/products-put');
const brands = require('./routes/brands');
const status = require('./routes/status');
const claims = require('./routes/claims');
const commonLabel = require('./routes/common-label');
const commonLabelPost = require('./routes/common-label-post');
const settlements = require('./routes/settlements');
const questions = require('./routes/questions');
const comments = require('./routes/comments');
const approvals = require('./routes/approvals');
const sales = require('./routes/sales');
const transactions = require('./routes/transactions');
const reasons = require('./routes/reasons');
const removeSales = require('./routes/remove-sales');
const buyersGet = require('./routes/buyers-get');
const ciceksepeti = require('./ecommerce/ciceksepeti');
const N11 = require('./ecommerce/n11');

router
	.get('/', async ctx => {
		ctx.body = 'Store is required';
	})
	.get('/deneme', deneme)
	.post('/deneme', deneme)

	.get('/:store/brands', brands)
	.get('/:store/brands/:page/:size', brands)
	.get('/:store/brands/:name', brands)

	.get('/:store/suppliers', suppliers)

	.get('/:store/shipment-providers', providers)
	.post('/:store/shipment-providers/:cargoCompany', providers)

	.get('/:store/categories', categories)
	.get('/:store/categories/:id', categories)
	.get('/:store/categories/:id/:attributes', categories)

	.get('/:store/products', products)
	.get('/:store/products/:status', products)
	.get('/:store/products/:status/:barcode', products)
	.get('/:store/products/:status/:start/:end', products)
	.get('/:store/products/:status/:start/:end/:orderField', products)
	.get('/:store/products/:status/:start/:end/:orderField/:orderBy', products)

	/*
	.get("/:store/products", products)
	.get("/:store/products/:barcode", products)
	.get("/:store/products/:page/:size", products)
	.get("/:store/products/:approved/:startDate/:endDate", products)
	.get("/:store/products/:startOffSet/:rowCount/:status/:withData", products)
	.get("/:store/products/:productId", products)
*/
	.post('/:store/products', productsPost)
	.get('/:store/products-post', productsPost)

	.put('/:store/products/:process', productsPut)
	.get('/:store/products-put/:process', productsPut)

	.get('/:store/request/:batchRequestId', requests)

	.get('/:store/status/:type', status)

	.get('/:store/orders/:status', orders)
	.get('/:store/orders/:status/:orderNumber', orders)
	.get('/:store/orders/:status/:filter1/:filter2', orders)
	.get('/:store/orders/:status/:filter1/:filter2/:orderField', orders)
	.get('/:store/orders/:status/:filter1/:filter2/:orderField/:order', orders)

	.get('/:store/common-label/:cargoTrackingNumber', commonLabel)
	.post('/:store/common-label/:cargoTrackingNumber', commonLabelPost)

	.get('/:store/settlements/:dateType', settlements)
	.get('/:store/settlements/:dateType/:orderNumber', settlements)
	.get('/:store/settlements/:dateType/:start/:end', settlements)
	.get(
		'/:store/settlements/:dateType/:start/:end/:transactionType',
		settlements
	)
	.get(
		'/:store/settlements/:dateType/:start/:end/:size/:transactionType',
		settlements
	)
	.get(
		'/:store/settlements/:dateType/:start/:end/:page/:size/:transactionType',
		settlements
	)

	.get('/:store/questions/:status', questions)
	.get('/:store/questions/:status/:questionId', questions)
	.get('/:store/questions/:status/:start/:end', questions)
	.get(
		'/:store/questions/:status/:start/:end/:orderField-:orderBy',
		questions
	)
	.get(
		'/:store/questions/:status/:start/:end/:size/:orderField-:orderBy',
		questions
	)
	.get(
		'/:store/questions/:status/:start/:end/:page/:size/:orderField-:orderBy',
		questions
	)

	.get('/:store/claims/:status', claims)
	.get('/:store/claims/:status/:orderNumber', claims)
	.get('/:store/claims/:status/:filter1/:filter2', claims)
	.get('/:store/claims/:status/:filter1/:filter2/:orderField', claims)
	.get('/:store/claims/:status/:filter1/:filter2/:orderField/:order', claims)

	.get('/:store/sales/:status/:orderBy/:orderType/:page/:size', sales)
	.get(
		'/:store/sales/:status/:orderBy/:orderType/:page/:size/:startDate/:endDate',
		sales
	)
	.get('/:store/sales/:saleCode/:reasonId', sales)
	.get('/:store/sales/:saleCode', sales)
	.get('/:store/comments/:userType/:productId/:rate/:comment', comments)
	.get('/:store/comments/:userType/:productId/:comment', comments)
	.get('/:store/approvals/:saleCode/:process', approvals)
	.get(
		'/:store/transactions/:startDate/:endDate/:startOffSet/:rowCount/:process',
		transactions
	)
	.get('/:store/reasons/:process', reasons)
	.get('/:store/remove/:saleCode/:userType', removeSales)
	.get('/:store/buyers/:byStatus/:startOffSet/:rowCount', buyersGet);

async function deneme(ctx) {
	//const data = ctx.request.body;
	ctx.body = await N11.getCities();
}

module.exports = router;
