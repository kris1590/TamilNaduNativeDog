import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../components/Navbar";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import MainFooter from "../components/main-footer";

export default function Contact() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  Get in touch
                </h1>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  Have questions or want to learn more about these remarkable native dogs? Whether you're curious about specific breeds, interested in our research/breeding facility project, or have information on other native dog breeds, we'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <Card className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <BuildingOffice2Icon className="h-6 w-6 text-primary-600" />
                    <div>
                      <p className="font-medium text-neutral-900">Address</p>
                      <p className="text-neutral-600">Madurai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                    <div>
                      <p className="font-medium text-neutral-900">Phone</p>
                      <a href="tel:+91 96293 77777" className="text-primary-600 hover:text-primary-700">
                        +91 96293 77777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                    <div>
                      <p className="font-medium text-neutral-900">Email</p>
                      <a href="mailto:tamilnadunativedogs@gmail.com" className="text-primary-600 hover:text-primary-700">
                        tamilnadunativedogs@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="pt-6 border-t border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-4">Bank Account Details</h3>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p><span className="font-medium">Account Name:</span> J. Ponramasubramanian</p>
                    <p><span className="font-medium">Account Number:</span> 445 685 679</p>
                    <p><span className="font-medium">Bank Name:</span> Indian Bank</p>
                    <p><span className="font-medium">Branch:</span> TVS Nagar Branch, Madurai</p>
                    <p><span className="font-medium">IFSC Code:</span> IDIB000T075</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                  Send us a message
                </h2>
                <p className="text-neutral-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-neutral-900 mb-2">
                        First name
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-neutral-900 mb-2">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone-number" className="block text-sm font-medium text-neutral-900 mb-2">
                      Phone number
                    </label>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" variant="primary" size="lg">
                      Send message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer Section */}
      <section className="section-padding bg-neutral-900">
        <MainFooter />
      </section>
    </>
  );
}
