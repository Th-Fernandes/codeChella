import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  as: 'section' | 'header' | 'footer'
  children: ReactNode
}

export function Container({as, children}: Props) {
  return (
    <Box as={as} paddingInline={{sm: '24px', md: '60px', lg: '120px'}}>
      {children}
    </Box>
  );
}