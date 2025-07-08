import Navbar from "../components/Navbar";
import ImageSlider from "./image-slider";
import Container from "../components/ui/Container";
import Link from "next/link";
import MainFooter from "../components/main-footer";
import {
  RAJAPALAYAM_IMAGES,
  CHIPPI_IMAGES,
  KANNI_IMAGES,
} from "../static-content.js";

export default function Gallery() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16 bg-gradient-to-br from-neutral-50 to-white min-h-screen">
        <Container>
          <div className="space-y-20 md:space-y-32 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent tracking-tight">
                  Gallery
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
                <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  Explore the beauty and diversity of Tamil Nadu's native dog breeds through our curated collection of images.
                </p>
              </div>
            </section>

            {/* Rajapalayam Section */}
            <section className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">Rajapalayam</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  The White Guardian
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  The elegant white guardian known for its loyalty and striking appearance. 
                  With its distinctive white coat and pinkish-orange nose, the Rajapalayam 
                  embodies grace and devotion.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <ImageSlider images={RAJAPALAYAM_IMAGES} />
                </div>
              </div>
            </section>

            {/* Chippiparai Section */}
            <section className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">Chippiparai</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  The Agile Hunter
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  The agile hunting companion with remarkable speed and endurance. 
                  Known for its exceptional jumping ability and energetic nature, 
                  the Chippiparai excels in hunting and agility.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <ImageSlider images={CHIPPI_IMAGES} />
                </div>
              </div>
            </section>

            {/* Kanni Section */}
            <section className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-neutral-800 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">Kanni</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  The Black Beauty
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  The black beauty with exceptional hunting skills and protective instincts. 
                  Similar to the Chippiparai in agility and structure, the Kanni 
                  stands out with its distinctive black coat and fierce loyalty.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <ImageSlider images={KANNI_IMAGES} />
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center space-y-8 py-16">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Preserve Our Heritage
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join us in protecting and celebrating these magnificent native breeds. 
                  Every image tells a story of heritage, loyalty, and cultural significance.
                </p>
                <Link href="/">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Learn More About Our Mission
                </button>
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>

      {/* Footer Section */}
      <section className="section-padding bg-neutral-900">
        <MainFooter />
      </section>
    </>
  );
}
