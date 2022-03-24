import { useRouter } from "next/router";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";
import useSWR from "swr";
import Mark from "../../components/mark";
export default function SingleRitz() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/ritz/${id}`);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Text style={{ fontWeight: "bold" }} fontSize="7xl">
          {data?.title}
        </Text>
      </Flex>

      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          width={{
            base: 200, // 0-48em
            md: 700, // 48em-80em,
          }}
        >
          <Mark>{data?.content}</Mark>
        </Box>
      </Flex>
    </>
  );
}
