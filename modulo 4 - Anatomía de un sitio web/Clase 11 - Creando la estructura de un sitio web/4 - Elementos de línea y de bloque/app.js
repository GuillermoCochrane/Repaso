const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});


