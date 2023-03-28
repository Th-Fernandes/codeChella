import { Heading } from "@/components/Heading";
import { Box, Flex, Image, List, ListItem } from "@chakra-ui/react";
import qrCode from "@/assets/img/qr-code.png";
import logo from "@/assets/img/logo-dark.png";
import { Text } from "@/components/Text";

export function CardSection() {
  return (
    <Flex
      as="section"
      padding={{ base: "4rem 1.5rem", md: "4rem 3.75rem" }}
      flexDirection="column"
      gap={{ base: "2rem", bg: "3rem" }}
    >
      <Heading>
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento
        e divirta-se!
      </Heading>

      <Box
        padding="2rem"
        marginInline="auto"
        w="min(100%, 792px)"
        boxShadow="black"
        bg="linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%)"
      >

        <Flex
          as="header"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Image src={logo.src} alt="logo" w="116px" />

          <span>{"</>"}</span>
        </Flex>

        <Flex flexDir={{base: 'column', bg: 'row'}} gap={{base: '2rem', bg: '3rem'}} alignItems="center">
          <Image
            src={qrCode.src}
            alt="qr code"
            w={{ base: "190px", md: "250px", bg: "190px" }}
          />

          <List textAlign={{base:"center", bg: "inherit"}}>
            <ListItem>
              <Text as="span" fontWeight={700} fontSize="2rem">Thiago Fernandes</Text>
            </ListItem>
            <ListItem>Ingresso Costesia</ListItem>
            <ListItem>Setor Pista</ListItem>
            <ListItem>Data: 11/03</ListItem>
            <ListItem>Local: São Paulo-SP</ListItem>
          </List>
        </Flex>
      </Box>
    </Flex>
  );
}
