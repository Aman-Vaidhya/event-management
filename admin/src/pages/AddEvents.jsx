import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddEvent } from "../hooks/useEvents";
import EventForm from "../components/EventForm";
import {Heading} from '@chakra-ui/react';

const AddEvents = () => {
  
  const { mutate: addEvent, isPending } = useAddEvent();
  const navigate = useNavigate(); 

  const handleSubmit = (form) => {
    addEvent(form, {
      onSuccess: () => {
        alert("Event added successfully!");
        navigate("/");
      },
      onError: () => {
        alert("Failed to add event");
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
