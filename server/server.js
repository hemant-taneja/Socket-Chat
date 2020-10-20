const path = require('path');
const express = require('express');
const public = path.join(__dirname,"/../public");

var app = express();
app.use(express.static(public));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})