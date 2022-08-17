import axios, { AxiosInstance } from "axios";

const PROTOCOL = "https";
const DNS = "pokeapi.co/api/v2/";
const BASE_URL = `${PROTOCOL}://${DNS}`;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Custom-Header": "foobar" },
});
