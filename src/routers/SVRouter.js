const router = require("express").Router();
const { getAllServiceProvider, getServiceProviderById, updateServiceProvider, addServiceProvider } = require("../controllers/serviceProviderController");

router.route("/admin/ServiceProvider")
    .get(getAllServiceProvider)
    .post(addServiceProvider)

router.route("/admin/ServiceProvider/:id")
    .get(getServiceProviderById)
    .put(updateServiceProvider)
module.exports = router;