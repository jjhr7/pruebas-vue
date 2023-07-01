import axios from 'axios'

let hostUrl = 'vmi621282.contaboserver.net/api/v1/';

if (hostUrl.length == 0 || hostUrl.startsWith('$')) {
    hostUrl = "vmi621282.contaboserver.net/api/v1/";
} else if (hostUrl.length > 8 && hostUrl.substring(0,8) == 'http://') {
    hostUrl = hostUrl.substring(8);
}

axios.defaults.withCredentials = true;

const serverUrl = 'http://' + hostUrl;
const token_name = 'TK_SUDLE';
let token = sessionStorage[token_name] || '';

let API = {
  jsonAsync: (method, args) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(serverUrl + token + method, args);
        console.log("nepe"+JSON.stringify(response))
        if (response.status === 200) {
          if (response.data && response.data.location) {
            token = response.data.location;
            sessionStorage[token_name] = token;
            resolve(API.jsonAsync(method, args)); // Corrección: utilizar API.jsonAsync en lugar de API.json
          } else {
            resolve(response.data);
          }
        } else {
          console.log(response.status);
          reject("Error.");
        }
      } catch (error) {
        console.log("nepe2"+JSON.stringify(error))
      }
    });
  }
};


export default API;
