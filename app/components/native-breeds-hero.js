import Card from "./ui/Card";

export default function NativeBreedHero({
  image,
  heading,
  content,
  width,
  height,
  alt,
}) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          width={width}
          height={height}
          alt={alt}
          className="w-full h-64 md:h-80 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center">
          {heading}
        </h3>
        
        <p className="text-neutral-600 text-center leading-relaxed">
          {content}
        </p>
      </div>
    </Card>
  );
}
