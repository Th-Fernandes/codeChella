import { Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Container } from "@/components/Section";

import img from "@/assets/img/pucharse-redirector-img.png";
import pucharseBtnIcon from "@/assets/img/pucharse-btn-icon.png";

export function TicketPurchaseRedirector() {
  const route = useRouter();
  const newPath = "/ticket-purchase";

  return (
    <Container
      as="section"
      pt="32px"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-between"
    >
      <Box
        role="banner"
        w="min(100%, 609px)"
        height="381px"
        backgroundImage={img.src}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      />

      <Box pt="32px" maxW="540px">
        <Heading as="h2" size="md" textAlign="center">
          {"<"} 11 e 12 de Março {">"} <br />
          Aluródromo de São Paulo
        </Heading>
        <Text pt="16px">
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências. Divirta-se!
        </Text>

        <Button
          onClick={() => route.push(newPath)}
          display="flex"
          gap="16px"
          padding="8px"
          m="32px auto 0"
          borderRadius="16px"
          bgColor="brand.primary.400"
          maxW="256px"
          color="white"
        >
          <Link href={newPath}>Comprar ingresso</Link>
          <img src={pucharseBtnIcon.src} alt="" />
        </Button>
      </Box>
    </Container>
  );
}
