var ex=require("express");
var router=ex.Router();
router.use("/", function (req, res) {
   res.render("cart.html");
});
module.exports=router;