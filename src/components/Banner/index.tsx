import { BackgroundProps, Center } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Heading } from "../Heading";

interface Props extends BackgroundProps {
  textContent: ReactNode
}

export function Banner({bgImage, textContent}:Props) {
  return (
    <Center
      as="section"
      role="banner"
      h={{base: "270px", md: "384px", "lg": "407px" }}
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading as="h1" size="xl">{textContent}</Heading>
    </Center>
  );
}
