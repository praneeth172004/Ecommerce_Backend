const express=require("express");
const { mobiles, Laptops, tvs, speakers, gamingConsoles, headphones, smartwatch, accessories, tablets } = require("../Controllers/ProductController");
const router=express.Router();

router.get("/Mobiles",mobiles);
router.get("/Laptops",Laptops);

router.get("/Tvs",tvs);

router.get("/Accessories",accessories)
router.get("/Watches",smartwatch)
router.get("/Headphones",headphones)
router.get("/Speakers",speakers);

module.exports=router;