import React from "react";
import { Box, Heading, Text, Stack, HStack, Icon } from "@chakra-ui/react";
import { MdLocationOn, MdCalendarMonth, MdAccessTime } from 'react-icons/md';

const EventCard = ({ event }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      mb={4}
      boxShadow="lg"
      bg="white"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)", transition: "all 0.2s ease-in-out" }}
    >
      <Stack spacing={3}>
        <Heading as="h3" size="lg" color="teal.600">
          {event.title}
        </Heading>
        <Text fontSize="md" color="gray.700">
          {event.description}
        </Text>
        <HStack spacing={2} color="gray.600">
          <MdCalendarMonth size={20} />
          <Text fontWeight="bold">Date: {event.date}</Text>
          {event.time && (
            <>
              <MdAccessTime size={20} />
              <Text fontWeight="bold">Time: {event.time}</Text>
            </>
          )}
        </HStack>
        {event.location && (
          <HStack spacing={2} color="gray.600">
            <MdLocationOn size={20} />
            <Text fontWeight="bold">Location:</Text>
            <Text>{event.location}</Text>
          </HStack>
        )}
      </Stack>
    </Box>
  );
};

export default EventCard;
