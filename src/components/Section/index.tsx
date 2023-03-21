import { Box, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends FlexProps {
  as: 'section' | 'header' | 'footer'
  children: ReactNode
}

export function Container({as, children, ...rest}: Props) {
  return (
    <Box as={as} paddingInline={{base: '24px', md: '60px', lg: '120px'}} {...rest}>
      {children}
    </Box>
  );
}