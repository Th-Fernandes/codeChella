import { Header } from "@/components/Header";
import { WelcomeBanner } from "./components/WelcomeBanner";
import { TicketPurchaseRedirector } from "./components/TicketPurchaseRedirector";
import { LineUp } from "./components/LineUp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <TicketPurchaseRedirector /> 
      <LineUp />
      <Footer />
    </>     
  );
}
