const axios = require('axios').default;


export const fetchProducts = async () => {
   return new Promise((resolve,reject)=>{
    axios.get('http://localhost:8081/getProducts')
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject("Error")
         })
   })
}
