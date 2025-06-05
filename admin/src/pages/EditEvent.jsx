import { useNavigate, useParams } from "react-router-dom";
import { useEvents, useUpdateEvent } from "../hooks/useEvents";
import EventForm from "../components/EventForm";
import { Heading } from '@chakra-ui/react';
import useCustomToast from "../utils/useCustomToast";

const EditEvent = () => {
  const { id } = useParams();
  const { data = [] } = useEvents();
  const { mutate: updateEvent, isPending } = useUpdateEvent();

  const flatList = data.flatMap((cat) => cat.events);
  const targetEvent = flatList.find((e) => e._id === id); // or e.id

  const navigate = useNavigate();
  const toast = useCustomToast();
  const handleSubmit = (form) => {
    updateEvent(
      { id, data: form },
      {
        onSuccess: () => {
          // alert("Updated successfully");
          toast({
            title: "Updated successfully",
            description: "The event was updated successfully.",
            status: "success",
          });
          navigate("/");
        },
        onError: () => toast({
            title: "Updated failed",
            status: "error",
          }),
      }
    );
  };

  if (!targetEvent) return <p>Event not found</p>;

  return (
    <div>
      <Heading as="h2" size="lg" my={4} align="center">Edit Event</Heading>
      <EventForm onSubmit={handleSubmit} defaultValues={targetEvent} isLoading={isPending} />
    </div>
  );
};

export default EditEvent;
