import { Button, Fade, Flex, Link, ListItem, ScaleFade, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import React from "react";
import useIsMobileNavOpened from "./hooks/useIsMobileNavOpened";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";


export default function Header() {
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const { isMobileNavOpened, toggleMobileNavState } = useIsMobileNavOpened();

  React.useEffect(() => setWindowWidth(window.innerWidth), []);

  return (
    <>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        bgColor="brand.primary.400"
        padding={["2rem 1.5rem", "2rem 3.75rem", null, "2.75rem 7.5rem"]}
      >
        <Image src={Logo} alt="logo" width={234} height={64} />
        {windowWidth < 768 ? (
          <Button onClick={toggleMobileNavState} bg="none" _hover={{ background: 'none'}}>
            <Image src="/menu.png" alt="navegação" width={32} height={32}/>
          </Button>
        ) : (
          <DesktopNav />
        )}
      </Flex>

      {isMobileNavOpened && <MobileNav isMobileNavOpened={isMobileNavOpened} />}
    </>
  );
}
