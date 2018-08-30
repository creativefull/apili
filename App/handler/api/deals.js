const shortid = require('shortid')

function Deals() {
    this.new = (req, res,next) => {
        const b = req.body
        b._id = shortid.generate()
        b.created_at = new Date()

        req.db.SaveData('deals', b, (err, results) => {
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

    this.list = (req,res,next) => {
        const uid = req.params.uid
        req.db.find('deals', {uid : uid}, {}, (err, results) => {
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
        req.db.findOne('deals', {_id : _id}, (err, results) => {
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
}

module.exports = Deals;