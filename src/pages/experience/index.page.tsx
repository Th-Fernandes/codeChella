import { Page } from "@/components/Page";
import bannerImgMobile from "@/assets/img/expirience-banner-mobile.png";
import bannerImgDesktop from "@/assets/img/expirience-banner-desktop.png";

export default function ExperiencePage() {
  return (
    <Page.Container>
      <Page.Header />
      <Page.MainContent>
        <Page.Banner
          textContent="A Experiência"
          bgImage={{base: bannerImgMobile.src, md: bannerImgDesktop.src}}
        />
      </Page.MainContent>
      <Page.Footer />
    </Page.Container>
  );
}
