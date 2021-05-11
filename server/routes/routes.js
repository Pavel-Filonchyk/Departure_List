const {Router} = require("express");
const router = Router();  

const way = require("../data/data")
router.get("/", (req, res) =>{  
    const page = req.query.page
    const size = req.query.size
    const startIndex = (page -1) * size
    const endIndex = page * size

    const results = way.data.data; 
    const resultData = results.slice(startIndex, endIndex)
   
    res.json(resultData);  
})

module.exports = router; 

