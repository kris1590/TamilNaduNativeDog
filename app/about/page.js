"use client"
import NavBar from "../components/Navbar";
import Card from "./card";
import Mating from "./mating";
import Container from "../components/ui/Container";
import MainFooter from "../components/main-footer";
import { useState } from "react";

const dogCharacteristics = [
  {
    heading: "Love and Affection",
    content:
      "Native breeds, like any other dog, crave love and affection. Interestingly, they thrive when they receive this from their owners, with their natural potential increasing by at least 20%. When treated as part of the family, these dogs perform tasks more effectively and become more engaged in their roles.",
    highlights: [
      "Natural potential increases by 20% with love",
      "Thrive when treated as family members",
      "Perform tasks more effectively",
      "Become more engaged in their roles"
    ]
  },
  {
    heading: "Nutrition and Supplements",
    content:
      "It's essential to provide adequate food supplements and minerals to these breeds. These nutrients fill any gaps left by regular food and are critical during the first year, building a strong foundation. After this period, they will begin to function at their peak potential.",
    highlights: [
      "Provide adequate food supplements and minerals",
      "Critical during the first year",
      "Builds strong foundation",
      "Enables peak potential performance"
    ]
  },
  {
    heading: "Avoid Early Use of Collars",
    content:
      "Using collars or harnesses too early can lead to skin problems and mental stress. For the first 18 months, it's best to avoid the constant use of collars indoors. While it's fine to use a collar for walking, allowing them to roam freely inside helps support their natural growth and intelligence.",
    highlights: [
      "Can cause skin problems and mental stress",
      "Avoid constant use indoors for first 18 months",
      "Fine to use for walking",
      "Free roaming supports natural growth"
    ]
  },
  {
    heading: "Freedom to Roam",
    content:
      "These dogs should not be confined to cages or locked indoors for long periods. When free to roam, they use their natural intelligence to explore and express themselves. Confinement, on the other hand, can lead to frustration and mental stagnation.",
    highlights: [
      "Should not be confined to cages",
      "Use natural intelligence when free",
      "Confinement leads to frustration",
      "Can cause mental stagnation"
    ]
  },
  {
    heading: "Simple Training",
    content:
      "Training native breeds is relatively simple. As long as their basic needs—food, water, sleeping area, and toileting spot—remain consistent, they tend to train themselves. These dogs quickly learn routines without the need for constant commands, making training hassle-free.",
    highlights: [
      "Training is relatively simple",
      "Keep basic needs consistent",
      "Dogs tend to train themselves",
      "Learn routines without constant commands"
    ]
  },
  {
    heading: "Bonding Time",
    content:
      "Spending quality time with them, along with providing love and affection, is crucial. This interaction helps foster a deep bond between dog and owner. Over time, these dogs begin to sense their owner's thoughts, emotions, and even subtle changes like body temperature. In this way, love and affection serve as an unspoken form of training, allowing them to understand and follow instructions intuitively.",
    highlights: [
      "Spending quality time is crucial",
      "Fosters deep bond between dog and owner",
      "Dogs sense owner's thoughts and emotions",
      "Love serves as unspoken training"
    ]
  },
];

const specifcCharacterestics = [
  {
    heading: "Rajapalayam",
    content:
      'The Rajapalayam is a dedicated guard dog, making it an ideal companion for home settings. Known as a "one-man dog," it forms deep, loyal bonds primarily with its owner. These dogs are sensitive creatures, highly attuned to their surroundings, which makes them excellent watchdogs. They are typically white in color, adding to their striking appearance. However, their sensitivity requires careful socialization and training to ensure they interact harmoniously with others. They thrive best when showered with love, affection, and quality time during their training process.',
    highlights: [
      "Dedicated guard dog for home settings",
      "Forms deep bonds with primary owner",
      "Highly sensitive and attuned to surroundings",
      "White color with striking appearance",
      "Requires careful socialization",
      "Thrives with love and quality time"
    ]
  },
  {
    heading: "Chippiparai",
    content:
      "The Chippiparai is a hunting breed with a strong instinct for tracking and chasing prey. Their natural talents make them ideal for farmhouse environments, where they can roam freely and put their hunting skills to use. These dogs come in a range of shades, described in Tamil, including Pulla (Light brown or Fawn), Karambai (Creamy white), Santhana pillai (Sandalwood color), Mayilai (Curdy white), Rethha sevalai (Reddish brown), Sevalai (Brown), Marai (Dark brown or Muddy brown), Semmarai (Reddish brown), Karumarai (Dark brown or Blackish brown), Vatta semmarai (Round reddish brown spots), Vatta karumarai (Round dark brown spots), and Thaen karambai (Honey cream).",
    highlights: [
      "Hunting breed with strong tracking instincts",
      "Ideal for farmhouse environments",
      "Needs freedom to roam and hunt",
      "Comes in various color shades",
      "Natural hunting skills and abilities"
    ]
  },
  {
    heading: "Kanni",
    content:
      "The Kanni is very similar to the Chippiparai in terms of functionality and physique, and the two breeds can often be interchanged. The key difference is that the Kanni has a black base color. Like the Chippiparai, it is a hunting breed, well-suited for farmhouses, with remarkable speed, agility, and the ability to perform long and high jumps, making it ideal for hunting. It is highly alert, able to detect threats in the farmhouse, and will protect the family from danger. These dogs will defend their territory, even against much stronger intruders. Overall, Kannis are known for their courage, bravery, confidence, and attentiveness.",
    highlights: [
      "Similar to Chippiparai in function and physique",
      "Black base color (key difference)",
      "Hunting breed for farmhouses",
      "Remarkable speed, agility, and jumping ability",
      "Highly alert and protective",
      "Known for courage, bravery, and confidence"
    ]
  },
];

function NoseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// Expandable Section Component
function ExpandableSection({ title, children, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 text-left hover:bg-neutral-50 transition-colors flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <svg
          className={`w-5 h-5 text-neutral-500 transition-transform ${isExpanded ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-6 pb-4 border-t border-neutral-100">
          {children}
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <>
      <NavBar />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-neutral-50">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                Comprehensive Dog Care Tips
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Learn essential care practices for Tamil Nadu's native dog breeds to ensure their health, happiness, and natural potential.
              </p>
            </div>
          </Container>
        </section>

        {/* Dog Characteristics Section */}
        <section className="section-padding bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Card characterestics={dogCharacteristics} />
            </div>
          </Container>
        </section>

        {/* Scented Hound Section */}
        <section className="section-padding bg-neutral-100">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                  Scented Hound Characteristics
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Understanding the true nature of Tamil Nadu's native dogs as scented hounds
                </p>
              </div>

              {/* Quick Overview */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Quick Overview
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Native dogs of Tamil Nadu are classified as scented hounds, not sight hounds.
                  They can detect and identify people, animals, or objects even while in deep sleep,
                  showcasing their remarkable olfactory abilities.
                </p>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-4">
                <ExpandableSection title="Exceptional Scent Detection" defaultExpanded={true}>
                  <div className="space-y-3 text-neutral-600 leading-relaxed">
                    <p>
                      These dogs can detect and identify people, animals, or objects even while in deep sleep,
                      showcasing their remarkable olfactory abilities.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Detect threats while asleep</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Identify specific scents over long distances</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Differentiate between multiple smells</span>
                      </li>
                    </ul>
                  </div>
                </ExpandableSection>

                <ExpandableSection title="Military & Security Applications">
                  <div className="space-y-3 text-neutral-600 leading-relaxed">
                    <p>
                      Their exceptional scent skills make them valuable in military and army operations,
                      trained to detect bombs and critical evidence.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Bomb detection training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Search-and-rescue missions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Evidence detection capabilities</span>
                      </li>
                    </ul>
                  </div>
                </ExpandableSection>

                <ExpandableSection title="Historical Hunting Role">
                  <div className="space-y-3 text-neutral-600 leading-relaxed">
                    <p>
                      Historically used primarily for hunting, these dogs could sense animals in concealed hideouts,
                      offering protection to their owners from hidden dangers.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Detect hidden animals in concealed hideouts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Provide protection from hidden dangers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Long-distance scent tracking</span>
                      </li>
                    </ul>
                  </div>
                </ExpandableSection>

                <ExpandableSection title="Home Protection">
                  <div className="space-y-3 text-neutral-600 leading-relaxed">
                    <p>
                      When guarding homes or farmhouses, these dogs can detect external entities like other animals
                      or creatures, providing protection even if they are asleep or in another part of the house.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Monitor external threats while asleep</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Detect intruders from other parts of the house</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Provide 24/7 protection capabilities</span>
                      </li>
                    </ul>
                  </div>
                </ExpandableSection>
              </div>
            </div>
          </Container>
        </section>

        {/* Specific Characteristics Section */}
        <section className="section-padding bg-white">
          <Container>
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                Specific Characteristics
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card characterestics={specifcCharacterestics} />
            </div>
          </Container>
        </section>

        {/* Mating Section */}
        <Mating />
      </main>

      {/* Footer Section */}
      <section className="section-padding bg-neutral-900">
        <MainFooter />
      </section>
    </>
  );
}
