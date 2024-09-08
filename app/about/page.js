import NavBar from "../Navbar";
import Card from "./card";
import Mating from "./mating";

const dogCharacteristics = [
  {
    heading: "Love and Affection",
    content:
      "Native breeds, like any other dog, crave love and affection. Interestingly, they thrive when they receive this from their owners, with their natural potential increasing by at least 20%. When treated as part of the family, these dogs perform tasks more effectively and become more engaged in their roles.",
  },
  {
    heading: "Nutrition and Supplements",
    content:
      "It’s essential to provide adequate food supplements and minerals to these breeds. These nutrients fill any gaps left by regular food and are critical during the first year, building a strong foundation. After this period, they will begin to function at their peak potential.",
  },
  {
    heading: "Avoid Early Use of Belts",
    content:
      "Using belts or harnesses too early can lead to skin problems and mental stress. For the first 18 months, it’s best to avoid the constant use of belts indoors. While it’s fine to use a belt for walking, allowing them to roam freely inside helps support their natural growth and intelligence.",
  },
  {
    heading: "Freedom to Roam",
    content:
      "These dogs should not be confined to cages or locked indoors for long periods. When free to roam, they use their natural intelligence to explore and express themselves. Confinement, on the other hand, can lead to frustration and mental stagnation.",
  },
  {
    heading: "Simple Training",
    content:
      "Training native breeds is relatively simple. As long as their basic needs—food, water, sleeping area, and toileting spot—remain consistent, they tend to train themselves. These dogs quickly learn routines without the need for constant commands, making training hassle-free.",
  },
  {
    heading: "Bonding Time",
    content:
      "Spending quality time with them, along with providing love and affection, is crucial. This interaction helps foster a deep bond between dog and owner. Over time, these dogs begin to sense their owner’s thoughts, emotions, and even subtle changes like body temperature. In this way, love and affection serve as an unspoken form of training, allowing them to understand and follow instructions intuitively.",
  },
];

const specifcCharacterestics = [
  {
    heading: "Rajapalayam",
    content:
      'The Rajapalayam is a dedicated guard dog, making it an ideal companion for home settings. Known as a "one-man dog," it forms deep, loyal bonds primarily with its owner. These dogs are sensitive creatures, highly attuned to their surroundings, which makes them excellent watchdogs. They are typically white in color, adding to their striking appearance. However, their sensitivity requires careful socialization and training to ensure they interact harmoniously with others. They thrive best when showered with love, affection, and quality time during their training process.',
  },
  {
    heading: "Chippiparai",
    content:
      "The Chippiparai is a hunting breed with a strong instinct for tracking and chasing prey.\
       Their natural talents make them ideal for farmhouse environments,\
       where they can roam freely and put their hunting skills to use.\
       These dogs come in a range of shades, described in Tamil,\
       including Pulla (Light brown or Fawn), Karambai (Creamy white),\
       Santhana pillai (Sandalwood color), Mayilai (Peacock blue/green),\
       Rethha sevalai (Reddish brown), Sevalai (Brown),\
       Marai (Dark brown or Muddy brown), Semmarai (Reddish brown),\
       Karumarai (Dark brown or Blackish brown), Vatta semmarai\
       (Round reddish brown spots), Vatta karumarai (Round dark brown spots), and Thaen karambai (Honey cream).",
  },
  {
    heading: "Kanni",
    content:
      "The Kanni is very similar to the Chippiparai in terms of functionality and physique, and the two breeds can often be interchanged. The key difference is that the Kanni has a black base color. Like the Chippiparai, it is a hunting breed, well-suited for farmhouses, with remarkable speed, agility, and the ability to perform long and high jumps, making it ideal for hunting. It is highly alert, able to detect threats in the farmhouse, and will protect the family from danger. These dogs will defend their territory, even against much stronger intruders. Overall, Kannis are known for their courage, bravery, confidence, and attentiveness.",
  },
];
export default function About() {
  return (
    <>
      <NavBar />

      <h2 className="text-3xl font-bold tracking-tight lg:text-4xl text-center mt-8   ">
        Comprehensive Dog Care Tips
      </h2>
      {/* <div className="flex justify-center">
        <img
          src="/Main-Pic1.png"
          alt="Image of owner with dog with a slogan"
          className="min-w-[500px] object-cover"
        />
      </div> */}
      <div className="w-3/4  flex flex-col m-auto mt-2">
        <Card characterestics={dogCharacteristics} />
      </div>
      <section className="w-full py-4 md:py-12 lg:py-12 bg-[#F5F5F5]">
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl text-center    ">
          Scented Hound Characterestics
        </h2>
        <p className="mt-4 w-3/4 text-lg leading-8 text-gray-600 text-justify mx-auto max-w-screen-md ">
          The native dogs of Tamil Nadu are predominantly
          classified as scented hounds, though there is a
          common misconception that they are sight hounds.
          However, these dogs are indeed scented hounds, as
          evidenced by their remarkable ability to detect
          and identify people, animals, or objects even
          while in deep sleep. This keen sense of smell
          showcases their true potential as scented hounds.
          Their exceptional olfactory skills make them
          valuable assets in the military and army, where
          they are trained to detect bombs or other critical
          evidence based on scent. Historically, these dogs
          were primarily used for hunting, able to sense
          animals even in concealed hideouts, offering
          protection to their owners from hidden dangers.
          Supporting the idea of scented hounds, their
          highly developed sense of smell allows them to
          track scents over long distances, which is a trait
          not shared by sight hounds. In fact, they can
          differentiate between a multitude of smells,
          making them invaluable in search-and-rescue
          missions as well. Their reliability in such
          critical tasks further underscores the importance
          of their classification as scented hounds.
          Additionally, when guarding homes or farmhouses,
          these dogs can detect external entities like other
          animals or creatures, providing protection even if
          they are asleep or in another part of the house
          where they cannot visually monitor the intruder.
        </p>
      </section>
      <h2 className="text-3xl font-bold tracking-tight lg:text-4xl text-center mt-8 ">
        Specific Characterestics
      </h2>
      <div className="w-3/4  flex flex-col m-auto mt-2">
        <Card characterestics={specifcCharacterestics} />
      </div>
      <Mating />
    </>
  );
}
