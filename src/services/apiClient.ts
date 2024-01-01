import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '24ab5fa7515b4f30a8ca2813d4fffda8'
    }
})