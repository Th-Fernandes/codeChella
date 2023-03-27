import { ReactNode } from "react";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ChildrenCompProps {
  children: ReactNode
}

export function Container({children}:ChildrenCompProps) {
  return <>{children}</>;
}

export function MainContent({children}: ChildrenCompProps) {
  return(
    <main>
      {children}
    </main>
  );
}

export const Page = {
  Container,
  Header,
  MainContent,
  Banner,
  Footer
};

