import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/ui/Container";

// Helper function to format long answers
function formatAnswer(answer) {
  // Check if answer contains multiple sentences that can be broken down
  const sentences = answer.split('. ').filter(s => s.trim().length > 0);
  
  if (sentences.length <= 2) {
    return { type: 'simple', content: answer };
  }
  
  // For longer answers, create a structured format
  const mainPoint = sentences[0] + (sentences[0].endsWith('.') ? '' : '.');
  const details = sentences.slice(1).map(s => s + (s.endsWith('.') ? '' : '.'));
  
  return { type: 'structured', mainPoint, details };
}

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
      "The development of a strong and healthy puppy is influenced by several factors such as structure, mental sharpness, appearance, agility, speed, and skin condition. To nurture these qualities, it's essential to provide multivitamins and minerals throughout the first year of growth. This ensures proper nutrition, promoting the puppy's ideal physical and mental attributes.",
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

export default function Mating() {
  return (
    <section className="section-padding bg-neutral-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Breeding Best Practices and Puppy Care Essentials
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Essential information for native breed owners about breeding practices, puppy care, and maintaining the health of these remarkable dogs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const formattedAnswer = formatAnswer(faq.answer);
              
              return (
                <Disclosure key={faq.id} as="div" className="card">
                  <DisclosureButton className="group flex w-full items-start justify-between text-left p-6 hover:bg-neutral-50 transition-colors rounded-lg">
                    <span className="text-lg font-semibold leading-7 text-neutral-900 pr-6">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center flex-shrink-0">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-neutral-500 group-data-[open]:hidden transition-colors"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-neutral-500 [.group:not([data-open])_&]:hidden transition-colors"
                      />
                    </span>
                  </DisclosureButton>
                  
                  <DisclosurePanel as="div" className="px-6 pb-6">
                    {formattedAnswer.type === 'simple' ? (
                      <p className="text-base leading-7 text-neutral-600">
                        {formattedAnswer.content}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-base leading-7 text-neutral-700 font-medium">
                          {formattedAnswer.mainPoint}
                        </p>
                        <div className="border-t border-neutral-100 pt-4">
                          <ul className="space-y-3">
                            {formattedAnswer.details.map((detail, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-base leading-7 text-neutral-600">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </DisclosurePanel>
                </Disclosure>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
