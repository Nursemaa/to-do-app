const express = require('express');

const app = express();


//ToDo:  
app.get('/', (reg,res) => {
    res.send('request received');
})


app.listen(3050, "lokalhost", () =>{
    console.log("bald wird es Mittagspause")
})