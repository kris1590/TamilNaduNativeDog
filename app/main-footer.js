import Link from "next/link";
export default function MainFooter() {
  return (
    <div className="container m-auto px-4 md:px-6 text-center">
      <div className=" mx-auto space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Join Us in Preserving Tamil Nadu's Native Dog
          Breeds
        </h2>
        <p className="text-muted-foreground md:text-xl">
          Discover how you can contribute to the
          conservation and promotion of these unique and
          cherished canine companions.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
