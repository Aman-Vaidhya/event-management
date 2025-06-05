import { useNavigate } from "react-router-dom";
import { useAddEvent } from "../hooks/useEvents";
import EventForm from "../components/EventForm";
import { Heading } from '@chakra-ui/react';
import useCustomToast from "../utils/useCustomToast";

const AddEvents = () => {

  const { mutate: addEvent, isPending } = useAddEvent();
  const navigate = useNavigate();
  const toast = useCustomToast();

  const handleSubmit = (form) => {
    addEvent(form, {
      onSuccess: () => {
        // alert("Event added successfully!");
        toast({
          title: "Event added.",
          description: "The event was added successfully.",
          status: "success",
        });
        navigate("/");
      },
      onError: () => {
        // alert("Failed to add event");
        toast({
          title: "Event added Failed",
          status: "error",
        });
      },
    });
  };

  return (
    <div>
      <Heading as="h2" size="lg" my={4} align="center">Add New Event</Heading>
      <EventForm onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
};

export default AddEvents;
