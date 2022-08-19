import axios from "axios";

const http = axios.create({
    baseURL: "http://app:3000/api"//process.env.NEXT_PUBLIC_STORE_API_URL
})

export default http;