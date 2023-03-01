import { theme } from "@/assets/theme";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: 'CodeChella',
  description: 'Uma nova experiência sobre música, linguagens e tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head/>
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
