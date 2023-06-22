const {Router} = require ("express");
const controller = require ("./controller");

const router = Router();

router.get("/", controller.getLocations);
router.get("/:id", controller.getLocationsById);
router.post("/",controller.addLocations);
router.delete("/:id",controller.removeLocations);
module.exports = router;