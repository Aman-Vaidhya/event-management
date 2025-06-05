import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string(),
  location: Yup.string(),
});

const initialForm = {
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
};

const EventForm = ({ onSubmit, defaultValues = {}, isLoading }) => {
  const initialValues = { ...initialForm, ...defaultValues };

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={5}>
              <Field name="title">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.title && form.touched.title}>
                    <FormLabel>Title</FormLabel>
                    <Input {...field} placeholder="Event title" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="description">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.description && form.touched.description}>
                    <FormLabel>Description</FormLabel>
                    <Textarea {...field} placeholder="Event description" />
                    <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="date">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.date && form.touched.date}>
                    <FormLabel>Date</FormLabel>
                    <Input {...field} type="date" />
                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="time">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Time</FormLabel>
                    <Input {...field} type="time" />
                  </FormControl>
                )}
              </Field>

              <Field name="location">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input {...field} placeholder="Event location" />
                  </FormControl>
                )}
              </Field>

              <Button type="submit" colorScheme="blue" isLoading={isSubmitting || isLoading}>
                {isLoading ? "Saving..." : "Submit"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EventForm;
