import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const initialForm = {
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
};

const EventForm = ({ onSubmit, defaultValues = {}, isLoading }) => {
  const [form, setForm] = useState({ ...initialForm, ...defaultValues });

  // Only update form state ONCE when defaultValues change (like when editing)
  useEffect(() => {
    setForm({ ...initialForm, ...defaultValues });
  }, [JSON.stringify(defaultValues)]); // safely compare object content

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.date) {
      alert("Title and Date are required");
      return;
    }

    onSubmit(form);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxW="lg"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Stack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            placeholder="Event title"
            value={form.title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Event description"
            value={form.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date</FormLabel>
          <Input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Time</FormLabel>
          <Input
            name="time"
            placeholder="HH:MM"
            value={form.time}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            placeholder="Event location"
            value={form.location}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" isLoading={isLoading}>
          {isLoading ? "Saving..." : "Submit"}
        </Button>
      </Stack>
    </Box>
  );
};

export default EventForm;
