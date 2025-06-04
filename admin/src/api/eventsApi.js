import axiosInstance from "../utils/axiosInstance"

export const fetchEvents = async () => {
    const res = await axiosInstance.get("/events");
    return res.data;
}

export const addEvents = async (eventData) =>{
    const res = await axiosInstance.post("/events",eventData) ;
    return res.data; 
}

export const updateEvent = async ({ id, data }) => {
  const res = await axiosInstance.put(`/events/${id}`, data);
  return res.data;
};

export const deleteEvent = async (id) => {
  const res = await axiosInstance.delete(`/events/${id}`);
  return res.data;
};