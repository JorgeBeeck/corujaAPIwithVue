import axios from "axios";

export const http = axios.create({
  baseURL: "http://coruja-ta.herokuapp.com/api/",
});
