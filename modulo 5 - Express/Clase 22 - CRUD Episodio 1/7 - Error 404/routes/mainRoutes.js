
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
});
router.post("/ver-body", (req,res) =>{
    res.send(req.body)
})


module.exports = router