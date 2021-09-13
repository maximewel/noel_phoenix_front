
const localUrl = "http://localhost:8000/api";
const remoteUrl = "https://www.noel-phoenix-backend.tk/api";
const apiUrl = (process.env.NODE_ENV === 'production') ? remoteUrl : localUrl;


export default apiUrl;