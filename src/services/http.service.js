import axios from 'axios';

class $http {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://labs.entegy.com.au/entegy'
        });
    }
}

export default new $http();