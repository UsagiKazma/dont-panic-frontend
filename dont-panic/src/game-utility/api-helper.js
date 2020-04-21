import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/word",
});

export const getAllWords = async () => {
  const resp = await api.get("/");
  console.log("getAllWords -> resp", resp)
  return resp.data;
};