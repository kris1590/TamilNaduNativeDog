import Link from "next/link";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { BUTTON_TEXT, FOOTER_CONTENT, NAV_ITEMS } from "../../lib/constants";

export default function MainFooter() {
  return (
    <Container>
      <div className="space-y-12">
        {/* Main call-to-action section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Join Us in Preserving Tamil Nadu's Native Dog Breeds
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Discover how you can contribute to the conservation and promotion of these unique and cherished canine companions.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto bg-primary-600 text-black hover:bg-primary-700 hover:text-white"
              as={Link}
              href="/about"
            >
              {BUTTON_TEXT.learnMore}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black"
              as={Link}
              href="/contact"
            >
              {BUTTON_TEXT.contactUs}
            </Button>
          </div>
        </div>

        {/* Footer navigation and info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/20">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Tamil Nadu Native Breeds
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to preserving the heritage and legacy of Tamil Nadu's native dog breeds for future generations.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Native Breeds */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Native Breeds</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about#chippiparai"
                  className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Chippiparai
                </Link>
              </li>
              <li>
                <Link 
                  href="/about#rajapalayam"
                  className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Rajapalayam
                </Link>
              </li>
              <li>
                <Link 
                  href="/about#kanni"
                  className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kanni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get Involved</h4>
            <div className="space-y-2">
              <p className="text-white/70 text-sm">
                Support our mission to preserve these magnificent breeds.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/20 text-white hover:bg-white hover:text-black text-sm"
                as={Link}
                href="/contact"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              {FOOTER_CONTENT.description}
            </p>
            <p className="text-white/40 text-xs">
              {FOOTER_CONTENT.copyright}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
