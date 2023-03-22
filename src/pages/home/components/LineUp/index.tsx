import { Heading } from "@/components/Heading";
import { Container } from "@/components/Section";
import { Text } from "@/components/Text";
import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { LineUpList } from "./components/LineUpList";

export function LineUp() {
  const lineUpItems = {
    secondary: ["Python Maiden", "Apollo Client 2001", "Bon Java NickCallback"],
    tertiary: [ "Linkin Promises", "Fullstack Fighters", "Papa React", "Angular in Chains"],
    quartenary: ["hello", "world", "hello", "world"],
  };

  return (
    <Container as="section" mt="64px" paddingInline={{ md: "auto" }}>
      <Heading as="h2" fontSize={{ base: "48px", md: "64px" }}>
        /Line-up/
      </Heading>

      <Box
        maxW="300px"
        p="16px"
        bgColor="brand.secondary.400"
        m="80px auto 48px"
      >
        <Text
          as="span"
          display="block"
          textAlign="center"
          fontSize="36px"
          fontFamily={`'Calistoga', sans-serif`}
          fontWeight="400"
          color="white"
        >
          Sábado {"<"}11/03{">"}
        </Text>
      </Box>

      <LineUpList.Container>
        <LineUpList.MainItem />
        <LineUpList.Items hierarchy="secondary" items={lineUpItems.secondary} />
        <LineUpList.Items hierarchy="tertiary" items={lineUpItems.tertiary} />
        <LineUpList.Items hierarchy="quartenary" items={lineUpItems.quartenary}/>
      </LineUpList.Container>
    </Container>
  );
}
