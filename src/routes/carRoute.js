


const router = require('express').Router()
const {carController} = require('../controllers/carController')

router.route("/")
.get(carController.list)
.post()

router.route("/:id")
.get()
.put()
.delete()
.patch()


module.exports = router;