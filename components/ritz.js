import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Ritz({ ritz }) {
  const router = useRouter();
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {ritz?.createdAt.substring(0, 10)}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {ritz?.title}
          </Link>
          <chakra.p
            height={70}
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            width={{
              base: 200, // 0-48em
              md: 600, // 48em-80em,
              //   xl: "25%", // 80em+
            }}
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {ritz?.content.replace(/[^a-zA-Z ]/g, "").substring(0, 250)}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            onClick={() => router.push(`/ritz/${ritz.id}`)}
          >
            Read more
          </Link>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{ base: "none", sm: "block" }}
              src={ritz?.user?.image}
              alt="avatar"
            />
            <Link
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              {ritz?.user?.name}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
