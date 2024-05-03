const express =require("express");
const router =express.Router();
const multer = require('multer');
const storageMulter=require("../../helpers/storageMulter");
const upload = multer({storage: storageMulter()});



const controller=require("../../controllers/admin/user.controllers");

router.get("/", controller.index);
router.delete("/delete/:id",controller.deleteUser);

router.get("/create",controller.create);
router.post(
    "/create",
    upload.single('image'),
    controller.createPost
);
router.get("/edit/:id",controller.edit);


router.patch("/edit/:id",
    upload.single('image'),
    controller.editPatch
);

module.exports = router;