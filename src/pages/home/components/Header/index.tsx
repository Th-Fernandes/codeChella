import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import React from "react";

export function Header() {
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [isMobileNavOpened, setIsMobileNavOpened] = React.useState(false);

  React.useEffect(() => setWindowWidth(window.innerWidth), []);

  return (
    <>
      <Flex
        as="header"
        justifyContent="space-between"
        bgColor="brand.primary.400"
      >
        <Image src={Logo} alt="logo" width={234} height={64} />
        {windowWidth < 768 && (
          <Button onClick={() => setIsMobileNavOpened(actualState => !actualState)}>
            <Image src="/menu.png" alt="navegação" width={32} height={32} />
          </Button>
        )}
      </Flex>
      
      {isMobileNavOpened && <nav></nav>}
    </>
  );
}
