import { Link } from "react-router-dom";
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import EventCard from "../components/EventCard";
import { useEvents } from "../hooks/useEvents";

const Events = () => {
  const { data: eventsData, isLoading, error } = useEvents();

  if (isLoading) return <Text textAlign="center">Loading...</Text>;
  if (error) return <Text color="red.500" textAlign="center">Error: {error.message}</Text>;

  return (
    <Box maxW="4xl" mx="auto" p={4}>
      <Box textAlign="right" mb={6}>
        <Link to="/add">
          <Button colorScheme="teal">Add Event</Button>
        </Link>
      </Box>

      <VStack spacing={10} align="stretch">
        {eventsData?.map(({ category, events }) => (
          <Box key={category} borderWidth={1} borderRadius="md" p={5} boxShadow="md">
            <Heading size="md" mb={4}>{category}</Heading>
            {events.length > 0 ? (
              <EventCard events={events} />
            ) : (
              <Text color="gray.500">No events in this category.</Text>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Events;