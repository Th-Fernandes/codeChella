import { Heading } from "@/components/Heading";
import { Center } from "@chakra-ui/react";
import bannerImg from "../../../../assets/img/banner.png";
import mobileBannerImg from "../../../../assets/img/mobile-banner.png";

export function WelcomeBanner() {
  return (
    <Center
      as="section"
      role="banner"
      h="270px"
      bgImage={[
        mobileBannerImg.src,
        null,
        bannerImg.src
      ]}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading as="h1" size="xl" >
        Boas-vindas ao <br/>
        #CodeChella2023!
      </Heading>
    </Center>
  );
}
