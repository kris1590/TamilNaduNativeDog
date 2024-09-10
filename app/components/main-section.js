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
export default function MainSection() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-4 md:py-24 lg:py-32 bg-[url('/HeroPic.jpg')] bg-cover bg-center">
          <MainHeroSection />
        </section>
        <Vision
          image={"/OwnerWithDogs.jpg"}
          heading="Our Vision"
          content={VISION_CONTENT}
          aspect={"aspect-[4/3]"}
        />
        <Vision
          image={"/rajapalayam20.jpg"}
          heading="Our Mission"
          content={MISSION_CONTENT}
          aspect={"aspect-auto"}
        />
        <Vision
          image={"/Rajapalayam19.jpg"}
          heading="Get Involved"
          content={GET_INVOLVED_CONTENT}
          aspect={"aspect-auto"}
        />

        <section className="w-full py-4 md:py-4 lg:py-8 bg-white">
          <h1 className=" text-4xl mb-4 text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1 md:mb-8 lg:mb-8">
            Guardians of Tradition: The Timeless Native
            Breeds of Tamil Nadu
          </h1>
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <NativeBreedHero
                image={"/Chippiparai_Main.jpg"}
                heading={"Chippiparai"}
                content={CHIPPIPARAI_CONTENT}
                width={"400"}
                height={"400"}
                alt={"Breed 1"}
              />
              <NativeBreedHero
                image={"/rajapalayam.jpg"}
                heading={"Rajapalayam"}
                content={RAJAPALAYAM_CONTENT}
                width={"400"}
                height={"400"}
                alt={"Breed 2"}
              />
              <NativeBreedHero
                image={"/kanni.jpg"}
                heading={"Kanni"}
                content={KANNI_CONTENT}
                width={"385"}
                height={"385"}
                alt={"Breed 3"}
              />
            </div>
          </div>
        </section>
        <MainCultureSection />
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <MainFooter />
        </section>
      </main>
    </>
  );
}
