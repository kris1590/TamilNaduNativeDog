import Button from "./ui/Button";
import Container from "./ui/Container";
import { HERO_CONTENT, BUTTON_TEXT } from "../../lib/constants";

export default function MainHeroSection() {
  return (
    <Container className="relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading with gradient text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            <span className="text-gradient">{HERO_CONTENT.title}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 tracking-tight drop-shadow-md">
            {HERO_CONTENT.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {HERO_CONTENT.description}
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto"
            as="a"
            href="/about"
          >
            {BUTTON_TEXT.learnMore}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white hover:text-neutral-900"
            as="a"
            href="/contact"
          >
            {BUTTON_TEXT.contactUs}
          </Button>
        </div>
      </div>
    </Container>
  );
}
