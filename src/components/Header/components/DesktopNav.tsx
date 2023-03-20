import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import navLinksName from "../navLinksName.json";


export function DesktopNav() {
  return (
    <nav>
      <UnorderedList display="flex" alignItems="center" h="100%" styleType="none" gap="2rem" >
        {navLinksName.map(({id, value}) => (
          <ListItem key={id}>
            <Link href="#" color="white" fontWeight="bold">
              {value}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </nav>
  );
}
