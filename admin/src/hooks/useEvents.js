import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addEvents, deleteEvent, fetchEvents, updateEvent } from "../api/eventsApi"
import { categorizeEvents } from "../utils/categorizeEvents";

export const useEvents = () => {
    return useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const data = await fetchEvents();
             const categorized = categorizeEvents(data);
            return [
                { category: "Today's Events", events: categorized.today },
                { category: "Future Events", events: categorized.future },
                { category: "Past Events", events: categorized.past }
            ];
        },
    })
}

export const useAddEvent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:addEvents,
        onSuccess:()=>{
            queryClient.invalidateQueries(["events"]);
        }
    })
}

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });
};