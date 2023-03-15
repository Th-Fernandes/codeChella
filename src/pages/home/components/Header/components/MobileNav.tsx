import { Link, ListItem, ScaleFade, UnorderedList } from "@chakra-ui/react";
import navLinksName from "../navLinksName.json";

interface Props {
  isMobileNavOpened: boolean;
}

export function MobileNav({ isMobileNavOpened }: Props) {
  return (
    <ScaleFade initialScale={0}   in={isMobileNavOpened}>
      <nav>
        <UnorderedList
          backgroundColor="brand.primary.400"
          styleType="none"
          mt={"0.5rem"}
          position="absolute"
          zIndex={20}
          right={"0.5rem"}
          py={'1rem'}
        >
          {navLinksName.map(({ id, value }) => (
            <ListItem
              key={id}
              m={"0 1.97rem 0.5rem"}
              textAlign="center"
              _notFirst={{
                marginBlock: '0.5rem'
              }}
              _notLast={{
                _after: {
                  content: '""',
                  display: 'block',
                  margin: '0 auto',
                  width: '9.125rem',
                  height: '1px',
                  bg: 'white',
                  marginTop: '0.5rem'
                }
              }}
            >
              <Link href="#" color="white"fontWeight="bold" fontSize="1.25rem">
                {value}
              </Link>
              
            </ListItem>
          ))}
        </UnorderedList>
      </nav>
    </ScaleFade>
  );
}
