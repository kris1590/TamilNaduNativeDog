import Container from "./ui/Container";

export default function Vision({
  heading,
  content,
  image,
  aspect,
}) {
  return (
    <Container>
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
        {/* Content Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            {heading}
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {content}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={image}
              alt="Native dog breeds of Tamil Nadu"
              className={`w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 ${aspect}`}
            />
          </div>
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
      </div>
    </Container>
  );
}
