const TmpDealsHandler = require('./tmpDeals'), TmpDeals = new TmpDealsHandler()
const DealsHandler = require('./deals'), Deals = new DealsHandler()

module.exports = exports = function (app) {
    /*
    ====================
    ROUTES FOR TMP DEALS
    ====================
    */
    app.post('/api/tmpDeals/new', TmpDeals.new)
    app.post('/api/tmpDeals/push', TmpDeals.push)
    app.post('/api/tmpDeals/remove', TmpDeals.remove)
    app.get('/api/tmpDeals/list/:uid', TmpDeals.list)
    app.get('/api/tmpDeals/:id', TmpDeals.detail)

    /*
    =====================
    ROUTES FOR USER DEALS
    =====================
    */

    app.post('/api/deals/new', Deals.new)
    app.get('/api/deals/list/:uid', Deals.list)
    app.get('/api/deals/:id', Deals.detail)
}