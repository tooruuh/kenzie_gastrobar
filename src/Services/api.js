import axios from "axios";

export const api = axios.create({
    baseURL: 'https://kenzie-gastrobar.herokuapp.com/'
})
