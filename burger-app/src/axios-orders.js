import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-e67a3.firebaseio.com/'
});

export default instance;