const shortid = require('shortid')

function TmpDeals() {
    this.new = (req, res,next) => {
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
    }

    this.push = (req,res,next) => {
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
    }

    this.list = (req,res,next) => {
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
    }

    this.detail = (req,res,next) => {
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
    }

    this.remove = (req,res,next) => {
        const _id = req.body._id;
        req.db.remove('tmpDeals', {_id : _id}, (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    status : 500,
                    message : 'Server Error, Please contact us'
                })
            }
            
            return res.status(200).json({
                status : 200,
                message : 'Temporary Deals has been deleted'
            })
        })
    }
}

module.exports = TmpDeals;