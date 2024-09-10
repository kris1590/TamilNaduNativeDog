export default function NativeBreedHero({
  image,
  heading,
  content,
  width,
  height,
  alt,
}) {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <img
        src={image}
        width={width}
        height={height}
        alt={alt}
        className=" overflow-hidden rounded-xl object-contain border-2 bg-black border-solid"
      />
      <h3 className="text-2xl font-bold text-center">
        {heading}
      </h3>
      <p className="text-muted-foreground text-center md:text-lg">
        {content}
      </p>
    </div>
  );
}
