export default function MainCultureSection() {
  return (
    <>
      <section className="px-8  text-center rounded-md bg-stone-200 grid col-span-1 md:grid-cols-2 lg:grid-cols-4  ">
        <div className="flex flex-col mx-8 justify-center lg:col-span-2 md:mx-12 ">
          <h1 className="text-4xl mt-4 my-4 text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1 lg:mb-8">
            Where Gods and Guardians Unite
          </h1>
          <p>
            In Rajapalayam, within a small town called
            Alangulam, stands the Shree Arulmigu
            Thalakkudaiyaar Ayyanaar Swamy Temple, where the
            concept of "kuladeivam" plays a significant
            role. In southern India, a kuladeivam refers to
            a deity associated with a particular family or
            caste, though many families may share the same
            deity. One such deity is Ayyanar Swamy,
            worshipped by families from 34 nearby villages.
            A unique belief surrounds Bhairava, a dog, who
            serves as the guardian of Ayyanar, the main
            deity. Before approaching Ayyanar in the
            temple's sanctum, devotees must first seek
            Bhairava's permission, highlighting the deep
            reverence for the dog. This respect extends to
            daily customs, where households offer food first
            to a crow, then to a dog, before they themselves
            eat. This tradition symbolizes the strong
            cultural connection to the native breed of dogs
            and reflects how, even today, certain cultures
            in southern Tamil Nadu continue to revere the
            dog as a divine being.
          </p>
        </div>
        <div className="my-8 lg:col-span-2 flex justify-center">
          <img
            src="/temple.jpg"
            alt="temple in rajapalayam"
            height={600}
            width={600}
          ></img>
        </div>
      </section>
    </>
  );
}
