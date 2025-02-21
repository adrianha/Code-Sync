import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "https://piston-j9p2.onrender.com"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
