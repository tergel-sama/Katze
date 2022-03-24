import { useState } from "react";
import Markdown from "markdown-to-jsx";
import ResizeTextarea from "react-textarea-autosize";
import {
  Textarea,
  Box,
  Grid,
  Text,
  GridItem,
  FormControl,
  FormLabel,
  Code,
  Divider,
  Kbd,
  Input,
  SimpleGrid,
  Center,
  FormErrorMessage,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormHelperText,
  useToast,
  Button,
} from "@chakra-ui/react";
import Mark from "../../components/mark";
export default function PostCreate() {
  const toast = useToast();
  let [content, setContent] = useState(`
# A demo of markdown

👉 Чамайг бичих явцад өөрчлөлтүүд гарч ирнэ.

👈 Бичээд үзээрэй.

🤘 2 удаа \`enter\` дарвал шинэ мөрнөөс эхэлнэ. (Ер нь мөрнүүдийн дунд хоосон зай байх хэрэгтэй.)

## Агуулга
Агуулга гэж бичихээр шууд яаж байгааг та харж байна. 

## Follows 👇

*  [CommonMark](https://commonmark.org)
*  [GitHub Flavored Markdown](https://github.github.com/gfm/)

## Syntax highlighting

Syntax highlighting хийхдээ language-ийн нэрийг бичээрэй.

\`\`\`js
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
\`\`\`
\`\`\`py
# Take a list of numbers
my_list = [12, 65, 54, 39, 102, 339, 221,]

# use anonymous function to filter
result = list(filter(lambda x: (x % 13 == 0), my_list))

# display the result
print("Numbers divisible by 13 are",result)
\`\`\`

## GitHub flavored markdown (GFM)

Github дээр бичигдэж болдог table, check list гэх мэт markdown бичиж болно. 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

~~strikethrough~~

* [ ] task list
* [x] checked item



`);
  let [title, setTitle] = useState("Ritz");
  let [loading, setloading] = useState(false);

  let handleContent = (e) => {
    let inputValue = e.target.value;
    setContent(inputValue);
  };

  let handleTitle = (e) => {
    let inputValue = e.target.value;
    setTitle(inputValue);
  };
  const submitData = async () => {
    setloading(true);
    if (title.length < 1 && content.length < 5) {
      toast({
        title: "Анхаар.",
        description: "Гарчиг болон Ritz ээ бичээрэй!.",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      setloading(false);
      return;
    }

    try {
      const body = { title, content };
      await fetch("/api/ritz/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((result) => result.json())
        .then((result) => {
          setloading(false);
          toast({
            title: "Ritz Хадгалагдлаа.",
            description: "Дахиж Ritz хийгээрэй.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          console.log(result);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Гарчиг</FormLabel>
        <Input
          value={title}
          onChange={handleTitle}
          w="350px"
          id="email"
          type="email"
        />
        <FormHelperText>Гоё гарчиг бодоорой.</FormHelperText>
      </FormControl>
      <FormLabel mt={4}>Агуулга (Ritz)</FormLabel>
      <SimpleGrid columns={2} spacing="40px">
        <FormControl isRequired>
          <Textarea
            as={ResizeTextarea}
            value={content}
            onChange={handleContent}
          />
        </FormControl>
        <Box>
          <Mark>{content}</Mark>
        </Box>
      </SimpleGrid>
      <br />
      <SimpleGrid spacingX="40px" spacingY="20px">
        <Center>
          <Button
            isLoading={loading}
            onClick={submitData}
            loadingText="Хадгалж байна..."
            colorScheme="teal"
            variant="outline"
          >
            Хадгалах
          </Button>
        </Center>
      </SimpleGrid>
      <br />
      <br />
    </>
  );
}
