import { Box } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: 'p' | 'span' | 'a',
  children: string
}

export function Text({as, children}: Props) {
  return(
    <Box as={as} textStyle="text">
      {children}
    </Box>
  );
}