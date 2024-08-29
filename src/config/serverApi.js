import axios from "axios";

export const serverApi = axios.create({
    baseURL: "https://connections-api.goit.global/",
});