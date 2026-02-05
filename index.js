const axios = require('axios');
const fs = require('fs')

axios
  .get('http://localhost:8080/')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
    console.log('THIS IS WORKING')
  })
  .catch(error => {
    console.error(error);
  });