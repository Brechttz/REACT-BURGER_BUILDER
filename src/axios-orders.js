import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-c8eb3.firebaseio.com/'
});

export default instance;