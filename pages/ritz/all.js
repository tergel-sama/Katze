import { Pagination } from "antd";
import { useState } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Ritz from "../../components/ritz";
import useSWR from "swr";
export default function AllRitz() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(`/api/ritz/all?page=${pageIndex}`);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      {data?.ritz.map((item, index) => (
        <Ritz key={index} ritz={item} />
      ))}
      <Flex
        w="full"
        bg={useColorModeValue("gray.400", "gray.600")}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          pageSize={5}
          onChange={(e) => console.log(setPageIndex(e - 1))}
          showSizeChanger={false}
          size="small"
          current={pageIndex + 1}
          defaultCurrent={1}
          total={data?.count}
        />
      </Flex>
    </>
  );
}
