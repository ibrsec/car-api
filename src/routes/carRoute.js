


const router = require('express').Router()
const {carController} = require('../controllers/carController')

router.route("/")
.get(carController.list)
.post(carController.create)

router.route("/:id")
.get(carController.read)
.put(carController.update)
.delete(carController.delete)
.patch(carController.patchUpdate)


module.exports = router;