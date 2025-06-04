import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", 
});

export const fetchEvents = async () => {
  const res = await axiosInstance.get("/events");
  return res.data;
};
