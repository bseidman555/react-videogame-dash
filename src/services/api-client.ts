import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f5a5ff022cf449cfba59dadb8abe23c1'
    }
})