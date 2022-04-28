import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "API-KEY": "690bb222-c427-446f-a32e-17570f11a7d0"
    }
})

export const usersAPI = {
    follow() {
        return instance.get(`todos/1`)
            .then(response => {
                return response.data
            })
    }
}