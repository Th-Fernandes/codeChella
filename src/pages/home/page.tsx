import { Header } from "@/components/Header";
import { TicketPurchaseRedirector } from "./components/TicketPurchaseRedirector";
import { WelcomeBanner } from "./components/WelcomeBanner";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <TicketPurchaseRedirector /> 
    </>     
  );
}
