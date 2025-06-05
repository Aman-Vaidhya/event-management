import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({
    title,
    description = "",
    status = "info",
    duration = 3000,
    position = "top-right",
  }) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
      position,
    });
  };

  return showToast;
};

export default useCustomToast;
