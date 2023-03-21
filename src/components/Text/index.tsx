import { Box, HeadingProps } from "@chakra-ui/react";

interface Props extends HeadingProps {
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