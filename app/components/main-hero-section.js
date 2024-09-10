export default function MainHeroSection() {
  return (
    <div className="container px-4 md:px-6 text-center">
      <div className="max-w-3xl  space-y-4">
        <h1 className="text-2xl font-bold text-white tracking-tighter sm:text-3xl md:text-4xl md:w-full  drop-shadow-sm">
          Preserving the Lineage and Heritage of Tamil
          Nadu's Native Dog Breeds
        </h1>

        <div className="flex justify-center items-end md:items-start lg:items-start gap-4">
          <a
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </a>
          <div className="py-28"></div>
        </div>
      </div>
    </div>
  );
}
