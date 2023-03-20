import { Box, TypographyProps } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

interface Props extends TypographyProps {
  as?: 'p' | 'span' | 'a',
  children: string
}

export function Text({as, children, ...rest}: Props) {
  return(
    <Box as={as} textStyle="text" {...rest}>
      {children}
    </Box>
  );
}