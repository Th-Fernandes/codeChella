import { Heading } from "@/components/Heading";
import { Container } from "@/components/Section";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

interface FaqAccordionItemProps {
  title: string;
  panel: string;
}

function FaqAccordionItem({ title, panel }: FaqAccordionItemProps) {
  return (
    <AccordionItem mb="1.5rem" maxW="996px" marginInline="auto">
      <AccordionButton
        display="flex"
        justifyContent="space-between"
        bgColor="brand.primary.400"
      >
        <Heading as="h3" textAlign="initial" color="white">{title}</Heading>

        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel bgColor="brand.primary.200" lineHeight="2.5rem" padding="1rem">{panel}</AccordionPanel>
    </AccordionItem>
  );
}

export function FaqAccordionSection() {
  return (
    <Container as="section" paddingBlock="3rem">
      <Heading as="h2" size="lg" mb="3rem">Perguntas Frequentes:</Heading>

      <Accordion>
        <FaqAccordionItem
          title="Quais serão as atrações?"
          panel="Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o
          segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando
          neste link!"
        />
        <FaqAccordionItem
          title="Qual é a classificação etária?"
          panel="Lorem ipsum"
        />
        <FaqAccordionItem
          title="Quais são os setores disponíveis?"
          panel="Lorem ipsum"
        />
        <FaqAccordionItem
          title="Quais são os itens proibidos?"
          panel="Lorem ipsum"
        />
        <FaqAccordionItem
          title="Quais são os itens proibidos?"
          panel="Lorem ipsum"
        />
      </Accordion>
    </Container>
  );
}
