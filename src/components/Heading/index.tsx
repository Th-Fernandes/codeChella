import { Box } from "@chakra-ui/react";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  size: 'md' | 'lg'| 'xl'
  children: ReactNode
}

export function Heading({as = 'h2', size = 'md' ,children}: Props) {
  return (
    <Box as={as} textStyle={`heading.${size}`} >
      {children}
    </Box>
  );
}