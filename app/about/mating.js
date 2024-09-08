const faqs = [
  {
    id: 1,
    question: "How do dogs choose their mates?",
    answer:
      "Dogs typically exhibit a preference for specific mating partners, often with females choosing the male. During mating season, females may interact with multiple males but usually show a strong preference for one particular individual. While rare, there are instances where males may initiate the pairing. It's observed that these natural choices contribute to healthier offspring.",
  },
  {
    id: 2,
    question:
      "What are the implications of Cross breeding?",
    answer:
      "Crossbreeding carries a significant risk of health problems in puppies, with a 50% or higher chance of issues like joint problems, skin conditions, and leg deformities. Additionally, crossbred dogs may experience a reduction in their overall strength and resilience.",
  },
  {
    id: 3,
    question:
      "What are the best practices for raising a healthy and happy puppy?",
    answer:
      "The development of a strong and healthy puppy is influenced by several factors such as structure, mental sharpness, appearance, agility, speed, and skin condition. To nurture these qualities, it’s essential to provide multivitamins and minerals throughout the first year of growth. This ensures proper nutrition, promoting the puppy’s ideal physical and mental attributes.",
  },
  {
    id: 4,
    question:
      "How long of an interval should be maintained before a female dog is allowed to mate again?",
    answer:
      "Each dog has a different heat cycle, which can vary from 4 months, 6 months, to even a year. In rare cases, some dogs may only come into heat every 2 years. Ideally, it's best to wait at least one year or until the next heat cycle after a year before allowing the dog to mate again.",
  },
  {
    id: 5,
    question:
      "What are the consequences of frequent breeding?",
    answer:
      "Mating either a male or female dog in quick succession can lead to reduced immunity, lower platelet counts, and an increased risk of urinary infections. Additionally, the puppies may not be born in optimal health.",
  },
];

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
export default function Mating() {
  return (
    <div className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Breeding Best Practices and Puppy Care
            Essentials For Native breeds
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="pt-6"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel
                  as="dd"
                  className="mt-2 pr-12"
                >
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
