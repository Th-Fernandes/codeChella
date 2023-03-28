import { Page } from "@/components/Page";
import bannerImgMobile from "@/assets/img/finished-purchase-banner-mobile.png";
import bannerImgDesktop from "@/assets/img/finished-purchase-banner-desktop.png";
import { CardSection } from "./components/cardSection";

export default function FinishedPurchasePage() {
  return (
    <Page.Container>
      <Page.Header />
      <Page.MainContent>
        <Page.Banner
          textContent="A Experiência"
          bgImage={{ base: bannerImgMobile.src, md: bannerImgDesktop.src }}
        />
        <CardSection />
      </Page.MainContent>
      <Page.Footer />
    </Page.Container>
  );
}
