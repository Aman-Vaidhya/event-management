import React from 'react';
import { Box, Button, Flex, Heading, Stack, Text, HStack, Icon } from '@chakra-ui/react';
import { MdLocationOn, MdCalendarMonth, MdAccessTime } from 'react-icons/md';
import { useDeleteEvent } from '../hooks/useEvents';
import { Link } from 'react-router-dom';

const EventCard = ({ events }) => {
    const { mutate: deleteEvent } = useDeleteEvent();

    const handleDelete = (id) => {
        if (confirm("Delete this event?")) {
            deleteEvent(id, {
                onSuccess: () => alert("Deleted successfully"),
                onError: () => alert("Delete failed"),
            });
        }
    };

    return (
        <Stack spacing={4}>
            {events?.map((event) => (
                <Box
                    key={event._id}
                    p={6}
                    borderWidth={1}
                    borderRadius="lg"
                    boxShadow="lg"
                    bg="white"
                    _hover={{ boxShadow: "xl", transform: "scale(1.02)", transition: "all 0.2s ease-in-out" }}
                    transition="all 0.2s ease-in-out"
                >
                    <Heading size="md" color="teal.600">{event.title}</Heading>

                    <Stack spacing={1} mt={3} color="gray.600" fontSize="md">
                        <HStack spacing={2} align="center">
                            <MdCalendarMonth size={20} />
                            <Text>{event.date}</Text>
                        </HStack>

                        {event.time && (
                            <HStack spacing={2} align="center">
                                <MdAccessTime size={20} />
                                <Text>{event.time}</Text>
                            </HStack>
                        )}

                        <HStack spacing={2} align="center">
                             <MdLocationOn size={20} />
                            <Text>{event.location || 'No location'}</Text>
                        </HStack>
                    </Stack>

                    <Flex gap={4} mt={5} justify="flex-end">
                        <Link to={`/edit/${event._id}`}>
                            <Button size="md" colorScheme="teal" variant="outline">Edit</Button>
                        </Link>
                        <Button
                            size="md"
                            colorScheme="red"
                            onClick={() => handleDelete(event._id)}
                        >
                            Delete
                        </Button>
                    </Flex>
                </Box>
            ))}
        </Stack>
    );
};

export default EventCard;

