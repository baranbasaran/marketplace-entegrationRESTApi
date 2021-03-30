const Koa = require('koa');
const router = require('./router');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);

module.exports = app;
