import React, { useEffect, useState } from "react";
import { fetchEvents } from "../api/eventApi";
import EventCard from "../components/EventCard";
import { categorizeEvents } from "../utils/categorizeEvents";

import { Box, Button, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const events = await fetchEvents();
      const categorized = categorizeEvents(events);
      setEventsData([
        { category: "Today's Events", events: categorized.today },
        { category: "Future Events", events: categorized.future },
        { category: "Past Events", events: categorized.past }
      ]);
    } catch (err) {
      setError(err.message || "Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  if (loading)
    return (
      <Box textAlign="center" mt={10}>
        Loading events...
      </Box>
    );

  if (error)
    return (
      <Box textAlign="center" mt={10} color="red.500">
        Error: {error}
      </Box>
    );

  return (
    <Box maxW="600px" mx="auto" p={4}>
      <Button mb={6} onClick={loadEvents} colorScheme="teal">
        Refresh Events
      </Button>

      <VStack spacing={8} align="stretch">
        {eventsData.map(({ category, events }) => (
          <Box key={category}>
            <Heading as="h2" size="lg" mb={4}>
              {category}
            </Heading>
            {events.length > 0 ? (
              events.slice(0, 3).map((event) => (
                <EventCard key={event._id} event={event} />
              ))
            ) : (
              <Text color="gray.500">No events in this category.</Text>
            )}
            <Divider mt={6} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Events;
