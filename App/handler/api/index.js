const shortid = require('shortid')

module.exports = exports = function (app) {
    app.post('/api/tmpDeals/new', (req,res,next) => {
        const b = req.body
        b._id = shortid.generate()
        b.created_at = new Date()

        req.db.SaveData('tmpDeals', b, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status : 500,
                    message : 'Server Error, Please contact us'
                })
            }
            return res.status(200).json({
                status : 200,
                data : b
            })
        })
    })

    app.post('/api/tmpDeals/push', (req,res,next) => {
        const b = req.body
        let _id = b._id
        b.updated_at = new Date()

        req.db.update('tmpDeals', {_id : _id}, {$set : b}, (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    status : 500,
                    message : 'Server Error, Please contact us'
                })
            }

            return res.status(200).json({
                status : 200,
                data : b
            })
        })
    })

    app.get('/api/tmpDeals/list/:uid', (req,res,next) => {
        const uid = req.params.uid
        req.db.find('tmpDeals', {uid : uid}, {}, (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    status : 500,
                    message : 'Server Error, Please contact us'
                })
            }

            return res.status(200).json({
                status : 200,
                data : results
            })
        })
    })

    app.get('/api/tmpDeals/:id', (req,res,next) => {
        const _id = req.params.id
        req.db.findOne('tmpDeals', {_id : _id}, (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    status : 500,
                    message : 'Server Error, Please contact us'
                })
            }
            
            return res.status(200).json({
                status : 200,
                data : results
            })
        })
    })
}