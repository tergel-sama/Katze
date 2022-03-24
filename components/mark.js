import Markdown from "markdown-to-jsx";
import {
  Textarea,
  Link,
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
export default function Mark({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkToc, { heading: "Агуулга" }]]}
      components={{
        h1: ({ node, ...props }) => (
          <Text
            style={{ textAlign: "center", fontWeight: "bold" }}
            my={8}
            fontSize="5xl"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <Text
            style={{ fontWeight: "bold" }}
            my={8}
            mt="45px"
            fontSize="4xl"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <Text
            style={{ fontWeight: "bold" }}
            my={8}
            fontSize="3xl"
            {...props}
          />
        ),
        h5: ({ node, ...props }) => (
          <Text
            style={{ fontWeight: "bold" }}
            my={8}
            fontSize="2xl"
            {...props}
          />
        ),
        h6: ({ node, ...props }) => (
          <Text
            style={{ fontWeight: "bold" }}
            my={8}
            fontSize="1xl"
            {...props}
          />
        ),
        p: ({ node, ...props }) => <Text my={18} fontSize="xl" {...props} />,
        ul: ({ node, ...props }) => <UnorderedList fontSize="xl" {...props} />,
        li: ({ node, ...props }) => <ListItem fontSize="xl" {...props} />,
        ol: ({ node, ...props }) => <OrderedList fontSize="xl" {...props} />,
        code: ({ node, ...props }) => <Code {...props} />,
        a: ({ node, ...props }) => <Link color="teal.500" {...props} />,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={nord}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <Code className={className} {...props}>
              {children}
            </Code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
