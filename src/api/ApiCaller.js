
const localUrl = "http://localhost:8000/api";
const remoteUrl = "http://ec2-35-180-118-37.eu-west-3.compute.amazonaws.com:8000/api";
const apiUrl = (process.env.NODE_ENV === 'production') ? remoteUrl : localUrl;


export default apiUrl;