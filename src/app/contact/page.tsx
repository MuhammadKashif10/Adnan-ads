import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER, WHATSAPP_LINK, COMPANY_EMAIL, COMPANY_NAME } from "@/data/services";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CleanUp Dubai - Junk Removal Service",
  description: "Contact CleanUp Dubai for fast, affordable junk removal and waste management services. Call, WhatsApp, or fill out our form for an estimate in Dubai.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact CleanUp Dubai | Junk Removal Estimate",
    description: "Get pricing for junk removal and waste management in Dubai. We respond within minutes!",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact CleanUp Dubai | Junk Removal Estimate",
    description: "Fast, reliable junk removal in Dubai. Contact us now for a price estimate.",
  }
};

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CleanUp Dubai",
    "description": "Contact page for CleanUp Dubai junk removal and waste management services.",
    "url": "https://www.cleanupdubai.ae/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": COMPANY_NAME,
      "telephone": PHONE_NUMBER,
      "email": COMPANY_EMAIL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "07:00",
        "closes": "22:00"
      }
    }
  };

  return (
    <>
      <section className="section-padding bg-accent">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch for a no-obligation estimate for <strong>junk removal in Dubai</strong>. We respond within minutes!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-heading">Our Contact Details</h2>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", value: DISPLAY_PHONE_NUMBER, href: `tel:${PHONE_NUMBER}` },
                { icon: MessageCircle, label: "WhatsApp", value: "Send us a message", href: WHATSAPP_LINK },
                { icon: Mail, label: "Email", value: COMPANY_EMAIL, href: `mailto:${COMPANY_EMAIL}` },
                { icon: MapPin, label: "Location", value: "Dubai, UAE", href: undefined },
                { icon: Clock, label: "Working Hours", value: "7 days a week, 7AM - 10PM", href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith("https") ? "_blank" : undefined} 
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </>
  );
};
