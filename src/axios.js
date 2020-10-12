import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://us-central1-shopbox-8c5f7.cloudfunctions.net/api'
    
    // 'http://localhost:5001/shopbox-8c5f7/us-central1/api' //The API cloud function URL
});

export default instance;