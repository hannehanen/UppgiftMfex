var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());

app.get('/getProducts', function (req, res) {
   let data = { 
      "robots":[ 
            { 
            "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704", 
            "name":"Tommy - cleaning robot", 
            "price":2000, 
            "inStock":58 
            }, 
            { 
            "id":"715c7312-a6ac-497d-be5a-752d1d2df3a0", 
            "name":"Roberta - cat feeding robot", 
            "price":1800, 
            "inStock":0 
            } 
         ] 
      };
   res.end( JSON.stringify(data) );
})

app.post('/order', function (req, res) {  
   response = {  
         data: "recieved"
   };  
   res.end(JSON.stringify(response));  
})  

var server = app.listen(8081, function () {
   var host = 'localhost'
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})