import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept"]= 'application/json';
    return config;
});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401 || !localStorage.getItem('token')) {
            localStorage.removeItem('token');
            window.location.href = '/login'; 
        }
        return Promise.resolve(error.response);
    }
);

export default http;
