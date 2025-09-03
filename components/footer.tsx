import Logo from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { companyDetails, navigation, socialLinks } from "@/lib/constants";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-primary-foreground bg-foreground">
      {/* Newsletter Section */}
      {/* <div className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-primary-foreground mx-auto mb-6 max-w-2xl">
              Stay updated with electrical safety tips, maintenance advice, and
              special offers.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-900"
              />
              <Button className="bg-yellow-500 px-8 font-semibold text-black hover:bg-yellow-600">
                Subscribe now
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="order-1 flex flex-col gap-5">
              <Logo className="text-background" />

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map(
                  (social, index) =>
                    social.href !== "#" && (
                      <a
                        key={index}
                        href={social.href}
                        className="hover:bg-primary bg-muted-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200"
                      >
                        <social.icon size={20} />
                      </a>
                    ),
                )}
              </div>
            </div>
            <p className="text-secondary order-2 leading-relaxed md:order-3 lg:order-2">
              {companyDetails.description}
            </p>
            {/* Map Section */}
            <div className="order-3 md:order-2 md:row-span-2 lg:order-3">
              <Card className="overflow-hidden p-0">
                <CardContent className="h-72 p-0">
                  <iframe
                    src={companyDetails.mapEmbedUrl}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="size-full border-0"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
            {/* Quick Links */}
            <div className="order-4">
              <ul className="grid grid-cols-2 gap-6">
                {navigation.map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check
                      size={20}
                      className="text-primary shrink-0 font-black"
                    />
                    <Link
                      href={link.href}
                      className="hover:text-muted-foreground text-secondary font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="order-5">
              <div className="grid gap-6">
                <div className="flex items-start gap-2">
                  <MapPin
                    className="text-primary shrink-0 font-black"
                    size={20}
                  />
                  <div className="hover:text-muted-foreground text-secondary font-medium transition-colors duration-200">
                    <p>{companyDetails.address}</p>
                    <p>
                      {companyDetails.city}, {companyDetails.state},{" "}
                      {companyDetails.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone
                    className="text-primary shrink-0 font-black"
                    size={20}
                  />
                  <Link
                    href={`tel:${companyDetails.phone}`}
                    className="hover:text-muted-foreground text-secondary font-medium transition-colors duration-200"
                  >
                    {companyDetails.phone}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Mail
                    className="text-primary shrink-0 font-black"
                    size={20}
                  />
                  <Link
                    href={`mailto:${companyDetails.email}`}
                    className="hover:text-muted-foreground text-secondary font-medium transition-colors duration-200"
                  >
                    {companyDetails.email}
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    className="text-primary shrink-0 font-black"
                    size={20}
                  />
                  <div className="hover:text-muted-foreground text-secondary font-medium transition-colors duration-200">
                    <p className="">{companyDetails.hours}</p>
                    <p className="text-primary">{companyDetails.mainService}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-accent-foreground border-t py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-accent text-sm">{companyDetails.copyright}</p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="hover:text-muted-foreground text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-muted-foreground text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-muted-foreground text-accent transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
