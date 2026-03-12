import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER, WHATSAPP_LINK, COMPANY_NAME, COMPANY_EMAIL, services, serviceAreas } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Image src="/logo.png" alt={COMPANY_NAME} width={260} height={260} className="h-44 md:h-48 w-auto object-contain mb-4" />
            <p className="text-sm text-secondary-foreground/70 mb-4 xl:pr-6">
              Dubai's trusted junk removal and waste management service. Fast, reliable, and eco-friendly garbage removal across all Dubai areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.slice(0, 12).map((area) => (
                <span key={area} className="text-xs text-secondary-foreground/60 bg-secondary-foreground/10 px-2 py-1 rounded">
                  {area}
                </span>
              ))}
              <Link href="/areas" className="text-xs text-primary font-medium px-2 py-1">
                + More areas
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors">{DISPLAY_PHONE_NUMBER}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary transition-colors">{COMPANY_EMAIL}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Dubai, United Arab Emirates
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. | Junk Removal Service Dubai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
