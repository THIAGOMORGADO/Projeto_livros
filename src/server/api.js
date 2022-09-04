import axios from "axios";

const api = axios.create({
   baseURL: "https://rocky-waters-71572.herokuapp.com/",
});

export default api;