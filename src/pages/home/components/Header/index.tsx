import { Button, Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import React from "react";
import useIsMobileNavOpened from "./hooks/useIsMobileNavOpened";

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
        padding={['2rem 1.5rem', '2rem 3.75rem', null , '2.75rem 7.5rem']}  
      >
        <Image src={Logo} alt="logo" width={234} height={64} />
        {windowWidth < 768 
          ? (
            <Button onClick={toggleMobileNavState}>
              <Image src="/menu.png" alt="navegação" width={32} height={32} />
            </Button>
          ) 
          : (
            <nav>
              <UnorderedList display="flex" alignItems="center" h="100%" styleType="none" gap="2rem" >
                <ListItem><Link href="#" color='white' fontWeight="bold">A experiência</Link></ListItem>
                <ListItem><Link href="#" color='white' fontWeight="bold">Mapa de Setores</Link></ListItem>
                <ListItem><Link href="#" color='white' fontWeight="bold">Informações</Link></ListItem>
                <ListItem><Link href="#" color='white' fontWeight="bold">Ingresso</Link></ListItem>
              </UnorderedList>
            </nav>
          )}
      </Flex>

      {isMobileNavOpened && <nav></nav>}
    </>
  );
}
