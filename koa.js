const text = require('./lorem-ipsum')
const koa = require('koa')
const router = require('koa-router')()
const app = new koa()

router.get('/', function *(next) {
	this.body = text
})

router.get('/test', function *(next) {
	this.body = text
})

// response
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.PORT || 5005)
