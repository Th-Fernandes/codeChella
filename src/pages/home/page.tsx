import { TicketPurchaseRedirector } from "./components/TicketPurchaseRedirector";
import { LineUp } from "./components/LineUp";
import { Page } from "@/components/Page";
import bannerImg from "@/assets/img/banner.png";
import mobileBannerImg from "@/assets/img/mobile-banner.png";

export default function Home() {
  return (
    <Page.Container>
      <Page.Header />
      <Page.MainContent>
        <Page.Banner
          textContent={["Boas-vindas ao", <br key=""/>, "#CodeChella2023!"]}
          bgImage={[mobileBannerImg.src, null, bannerImg.src]}
        />
        <TicketPurchaseRedirector />
        <LineUp />
      </Page.MainContent>
      <Page.Footer />
    </Page.Container>
  );
}
