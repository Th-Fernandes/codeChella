import { Box } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  size: 'md' | 'lg'| 'xl'
  children: string
}

export function Heading({as = 'h2', size = 'md' ,children}: Props) {
  return (
    <Box as={as} textStyle={size}>
      {children}
    </Box>
  );
}