import { Text } from "@/components/Text";
import { Flex, List, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

{
  /* <LineUpList.Container>
  <LineUpList.MainItem />
  <LineupList.SecondaryItems items={['example', 'band']} />
  <LineupList.TertiaryItems items={['example', 'band']} />
  <LineupList.QuartenaryItems items={['example', 'band']} />
</LineUpList.Container> */
}
interface ContainerProps {
  children: ReactNode;
}

interface ItemProps {
  hierarchy: "secondary" | "tertiary" | "quartenary";
  items: string[];
}

function Container({ children }: ContainerProps) {
  return <List textAlign="center">{children}</List>;
}

function MainItem() {
  return (
    <ListItem>
      <Text as="span" fontSize="48px" fontWeight={700}>
        System of a DOM
      </Text>
    </ListItem>
  );
}

function Items({ hierarchy, items }: ItemProps) {
  const stylesByHierarchy = {
    secondary: {
      fontSize: "40px",
      fontWeight: 700,
    },
    tertiary: {
      fontSize: "32px",
      fontWeight: 700,
    },
    quartenary: {
      fontSize: "32px",
      fontWeight: 400,
    },
  };

  return (
    <ListItem>
      <Flex
        flexDirection={{ md: "column", bg: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="32px"
        marginBlock="32px"
        fontWeight="700"
      >
        <Flex gap="16px" flexDirection={{ base: "column", md: "row" }}>
          <Text
            fontSize={stylesByHierarchy[hierarchy].fontSize}
            fontWeight={stylesByHierarchy[hierarchy].fontWeight}
          >
            {items[0]}
          </Text>
          <Text
            fontSize={stylesByHierarchy[hierarchy].fontSize}
            fontWeight={stylesByHierarchy[hierarchy].fontWeight}
          >
            {items[1]}
          </Text>
        </Flex>
        <Flex gap="16px" flexDirection={{ base: "column", md: "row" }}>
          <Text
            fontSize={stylesByHierarchy[hierarchy].fontSize}
            fontWeight={stylesByHierarchy[hierarchy].fontWeight}
          >
            {items[2]}
          </Text>
          <Text
            fontSize={stylesByHierarchy[hierarchy].fontSize}
            fontWeight={stylesByHierarchy[hierarchy].fontWeight}
          >
            {items[3]}
          </Text>
        </Flex>
      </Flex>
    </ListItem>
  );
}

export const LineUpList = {
  Container,
  MainItem,
  Items,
};
