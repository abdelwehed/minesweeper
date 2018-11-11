import axios from 'axios';

const callApi = axios.create({
  baseURL: 'http://localhost:5030/api/player'
})

export default callApi;