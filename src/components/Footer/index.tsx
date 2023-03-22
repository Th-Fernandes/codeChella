import footerImg from "@/assets/img/footer-banner.png";
import footerDesktopImg from "@/assets/img/footer-banner-desktop.png";
import { Box, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { Text } from "../Text";
import logoDark from "@/assets/img/logo-dark.png";
import instagramIcon from "@/assets/img/social-media-instagram.png";
import twitterIcon from "@/assets/img/social-media-twitter.png";
import whatsappIcon from "@/assets/img/social-media-whatsapp.png";
import twitchIcon from "@/assets/img/social-media-twitch.png";
import { Container } from "../Section";

export function Footer() {
  return (
    <Box as="footer" bgColor="brand.secondary.300" pb="1.5rem" >
      <Box
        role="banner"
        height="400px"
        bgPos="center"
        bgImg={{ base: footerImg.src, md: footerDesktopImg.src }}
        bgSize="cover"
      />

      <Container as="section" display={{base: 'block', lg: 'flex'}} justifyContent="space-between" alignItems="center">
        <Flex flexDir="column" alignItems="center" gap="0.5rem" mb="2rem" pt="1.5rem" >
          <img src={logoDark.src} alt="" />

          <Flex flexDir={{base: 'column', md: 'row'}} alignItems="center">
            <Text as="span">Acesse nossas redes:</Text>

            <ButtonGroup>
              <IconButton  aria-label="acesse nossa página do instagram" bgColor="transparent">
                <img src={instagramIcon.src} alt="" />
              </IconButton>
              <IconButton  aria-label="acesse nosso perfil do twitter" bgColor="transparent">
                <img src={twitterIcon.src} alt="" />
              </IconButton>
              <IconButton  aria-label="entre em contato através do whatsapp" bgColor="transparent">
                <img src={whatsappIcon.src} alt="" />
              </IconButton>
              <IconButton  aria-label="acesse nosso canal da twitch" bgColor="transparent">
                <img src={twitchIcon.src} alt="" />
              </IconButton>
            </ButtonGroup>
          </Flex>
        </Flex>

        <Text as="span" display="block" textAlign="center">
          Desenvolvido por Thiago Fernandes. Projeto fictício sem fins comerciais.
        </Text>
      </Container>
    </Box>
  );
}
