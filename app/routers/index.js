var express = require( "express" );
var router = express.Router();
router.get("/",function( request , response ) {
    response.render("index",{
        pageTitle : "Feedback Form",
        pageId : "HomePage"
    });
});

module.exports = router;