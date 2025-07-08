import Container from "./ui/Container";

export default function MainCultureSection() {
  return (
    <section className="section-padding bg-neutral-100">
      <Container>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight text-center lg:text-left">
              Where Gods and Guardians Unite
            </h2>
            
            <div className="prose prose-lg text-neutral-600 leading-relaxed">
              <p>
                In Rajapalayam, within a small town called Alangulam, stands the Shree Arulmigu Thalakkudaiyaar Ayyanaar Swamy Temple, where the concept of "kuladeivam" plays a significant role. In southern India, a kuladeivam refers to a deity associated with a particular family or caste, though many families may share the same deity.
              </p>
              
              <p>
                One such deity is Ayyanar Swamy, worshipped by families from fifty six nearby villages. A unique belief surrounds Bhairava, a dog, who serves as the guardian of Ayyanar, the main deity. Before approaching Ayyanar in the temple's sanctum, devotees must first seek Bhairava's permission, highlighting the deep reverence for the dog.
              </p>
              
              <p>
                This respect extends to daily customs, where households offer food first to a crow, then to a dog, before they themselves eat. This tradition symbolizes the strong cultural connection to the native breed of dogs and reflects how, even today, certain cultures in southern Tamil Nadu continue to revere the dog as a divine being.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/Temple.jpg"
                alt="Temple in Rajapalayam"
                height={600}
                width={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
