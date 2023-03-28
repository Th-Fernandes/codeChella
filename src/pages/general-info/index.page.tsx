import { Page } from "@/components/Page";
import bannerImgMobile from "@/assets/img/general-info-banner-mobile.png";
import bannerImgDesktop from "@/assets/img/general-info-banner-desktop.png";
import { FaqAccordionSection } from "./components/Accordion";

export default function GeneralInfoPage() {
  return (
    <Page.Container>
      <Page.Header />
      <Page.MainContent>
        <Page.Banner
          textContent="A Experiência"
          bgImage={{ base: bannerImgMobile.src, md: bannerImgDesktop.src }}
        />
        <FaqAccordionSection />
      </Page.MainContent>
      <Page.Footer />
    </Page.Container>
  );
}
