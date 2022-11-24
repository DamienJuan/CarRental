import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import Car from '../assets/car.jpg'

export default function Hero() {
  let navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "yellow.400",
                zIndex: -1,
              }}
            >
              Rent a car
            </Text>
            <br />{" "}
            <Text color={"yellow.400"} as={"span"}>
              With Crypto
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
            Connect your wallet, choose a car and rent it for a day.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
            Pay with BNB when you return it.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
            Autonomously.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              onClick={() => handleClick("dashboard")}
              rounded={"full"}
              bg={"yellow.400"}
              color={"white"}
              _hover={{
                bg: "yellow.500",
              }}
            >
              Choose My Car
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          mb={10}
          src={Car}
        />
      </Flex>
    </Stack>
  );
}
