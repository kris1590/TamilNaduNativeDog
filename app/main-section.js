import Link from "next/link";
export default function MainSection() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-4 md:py-24 lg:py-32 bg-[url('/HeroPic.jpg')] bg-cover bg-center">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-200">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="text-4xl text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1 ">
                  Our Vision
                </div>

                <p className="text-muted-foreground md:text-lg text-center">
                  To preserve and celebrate the rich
                  heritage of native dog breeds, ensuring
                  their legacy is cherished as a vital part
                  of cultural history, while highlighting
                  the unique characteristics that have
                  significantly shaped and enriched diverse
                  cultures for generations to come.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1">
                  Our Mission
                </div>
                <p className="text-muted-foreground md:text-lg text-center">
                  To safeguard and celebrate the native dog
                  breeds by raising awareness of their
                  historical, cultural significance and
                  unique qualitites, educating the public,
                  and establishing a research and breeding
                  facility to maintain their lineage and
                  heritage
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1">
                  Get Involved
                </div>
                <p className="text-muted-foreground md:text-lg text-center">
                  Join us in preserving Tamil Nadu's native
                  dog breeds. Be a part of our mission to
                  protect their future by exploring ways to
                  support our efforts. Together, we can make
                  a lasting impact on safeguarding the
                  lineage and heritage of these unique and
                  treasured animals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 flex flex-col items-center">
                <img
                  src="/Chippiparai.jpg"
                  width={400}
                  height={400}
                  alt="Breed 1"
                  className=" overflow-hidden rounded-xl object-contain border-2 bg-black border-solid"
                />
                <h3 className="text-2xl font-bold text-center">
                  Chippiparai
                </h3>
                <p className="text-muted-foreground text-center md:text-lg">
                  The Chippiparai is renowned for its
                  hunting abilities and comes in various
                  colors, including shades of brown, red,
                  and black. Its strong hunting instincts
                  have made it highly agile, excelling in
                  high and long jumps, and it's known for
                  being energetic and hyperactive.
                </p>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <img
                  src="/rajapalayam.jpg"
                  width={400}
                  height={400}
                  alt="Breed 2"
                  className=" overflow-hidden rounded-xl object-contain"
                />
                <h3 className="text-2xl font-bold text-center">
                  Rajapalayam
                </h3>
                <p className="text-muted-foreground text-center md:text-lg">
                  The Rajapalayam is well-suited for home
                  environments. With its white coat, large
                  head, and pinkish-orange nose, it is known
                  as a "one-man dog," meaning it remains
                  extremely loyal and faithful to its owner.
                </p>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <img
                  src="/kanni.jpg"
                  width={385}
                  height={385}
                  alt="Breed 3"
                  className=" overflow-hidden rounded-xl object-contain"
                />
                <h3 className="text-2xl font-bold  ">
                  Kanni
                </h3>
                <p className="text-muted-foreground  text-center md:text-lg">
                  The Kanni is very similar to the
                  Chippiparai in terms of hunting skills,
                  agility, jumping ability, and body
                  structure. However, it differs primarily
                  in color, with the Kanni typically having
                  a black base.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-200">
          <div className="container m-auto px-4 md:px-6 text-center">
            <div className=" mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Us in Preserving Tamil Nadu's Native
                Dog Breeds
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Discover how you can contribute to the
                conservation and promotion of these unique
                and cherished canine companions.
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
        </section>
      </main>
    </>
  );
}
