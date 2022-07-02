const axios = require('axios').default;


export const postOrder = async (order) => {
   return new Promise((resolve,reject)=>{
    axios.post('http://localhost:8081/order',order)
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject("Error")
         })
   })
}
