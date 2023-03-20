import { Box, TypographyProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends TypographyProps {
  as?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  size: 'md' | 'lg'| 'xl'
  children: ReactNode
}

export function Heading({as = 'h2', size = 'md' , children, ...rest}: Props) {
  return (
    <Box as={as} textStyle={`heading.${size}`} {...rest} textAlign="center" >
      {children}
    </Box>
  );
}