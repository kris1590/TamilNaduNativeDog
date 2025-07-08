import Vision from "./vision";
import NativeBreedHero from "./native-breeds-hero";
import MainCultureSection from "./main-culture-section";
import {
  VISION_CONTENT,
  MISSION_CONTENT,
  GET_INVOLVED_CONTENT,
  RAJAPALAYAM_CONTENT,
  CHIPPIPARAI_CONTENT,
  KANNI_CONTENT,
} from "../static-content.js";
import MainHeroSection from "./main-hero-section";
import MainFooter from "./main-footer";
import Container from "./ui/Container";
import { SECTION_HEADINGS } from "../../lib/constants";

export default function MainSection() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-[url('/HeroPic.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <MainHeroSection />
        </section>

        {/* Vision Section */}
        <section className="section-padding bg-neutral-50">
          <Vision
            image={"/OwnerWithDogs.jpg"}
            heading={SECTION_HEADINGS.vision}
            content={VISION_CONTENT}
            aspect={"aspect-[4/3]"}
          />
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <Vision
            image={"/rajapalayam20.jpg"}
            heading={SECTION_HEADINGS.mission}
            content={MISSION_CONTENT}
            aspect={"aspect-auto"}
          />
        </section>

        {/* Get Involved Section */}
        <section className="section-padding bg-neutral-50">
          <Vision
            image={"/Rajapalayam19.jpg"}
            heading={SECTION_HEADINGS.getInvolved}
            content={GET_INVOLVED_CONTENT}
            aspect={"aspect-auto"}
          />
        </section>

        {/* Native Breeds Section */}
        <section className="section-padding bg-white">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                {SECTION_HEADINGS.breeds}
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <NativeBreedHero
                image={"/Chippiparai_Main.jpg"}
                heading={"Chippiparai"}
                content={CHIPPIPARAI_CONTENT}
                width={"400"}
                height={"400"}
                alt={"Chippiparai Dog Breed"}
              />
              <NativeBreedHero
                image={"/rajapalayam.jpg"}
                heading={"Rajapalayam"}
                content={RAJAPALAYAM_CONTENT}
                width={"400"}
                height={"400"}
                alt={"Rajapalayam Dog Breed"}
              />
              <NativeBreedHero
                image={"/kanni.jpg"}
                heading={"Kanni"}
                content={KANNI_CONTENT}
                width={"385"}
                height={"385"}
                alt={"Kanni Dog Breed"}
              />
            </div>
          </Container>
        </section>

        {/* Culture Section */}
        <MainCultureSection />

        {/* Footer Section */}
        <section className="section-padding bg-neutral-900">
          <MainFooter />
        </section>
      </main>
    </>
  );
}
