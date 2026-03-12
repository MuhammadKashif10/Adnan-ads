import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreas, PHONE_NUMBER, COMPANY_EMAIL } from "@/data/services";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Our Service Areas in Dubai | Junk Removal Across All Dubai Areas",
  description:
    "Our junk removal services cover all major areas in Dubai including Dubai Marina, JVC, Business Bay, Downtown Dubai, and more. Fast waste collection and garbage removal near you!",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Junk Removal Service Areas in Dubai — We Cover All of Dubai",
    description:
      "CleanUp Dubai provides junk removal and waste management services across all major Dubai areas. Dubai Marina, JVC, Business Bay, Downtown, and 30+ more locations.",
    url: "/areas",
    type: "website",
  },
  twitter: {
    title: "Junk Removal Service Areas in Dubai — We Cover All of Dubai",
    description:
      "CleanUp Dubai covers 40+ areas across Dubai. Professional junk removal near you — from Dubai Marina to Arabian Ranches.",
  },
};

export default function OurAreas() {
  const areasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Junk Removal Dubai — Service Areas",
    description:
      "Professional junk removal and waste management service covering all major areas in Dubai.",
    url: "https://www.cleanupdubai.ae/areas",
    provider: {
      "@type": "LocalBusiness",
      name: "CleanUp Dubai",
      url: "https://www.cleanupdubai.ae",
      telephone: PHONE_NUMBER,
      email: COMPANY_EMAIL,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Dubai, UAE`,
    })),
    serviceType: [
      "Junk Removal",
      "Waste Management",
      "Garbage Removal",
      "Waste Collection",
    ],
  };

  return (
    <>
      <section className="section-padding bg-accent">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">
            Our Service Areas in Dubai
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our junk removal and waste management services cover all major areas in Dubai.{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Call us or WhatsApp
            </Link>{" "}
            for a free estimate!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-2xl md:text-3xl font-heading text-center mb-8">
            Dubai Areas We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href="/contact"
                className="flex items-center gap-2 p-4 rounded-xl bg-card border border-border hover-card-effect group"
                title={`Junk removal in ${area}, Dubai`}
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {area}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-3xl font-heading mb-4">Junk Removal Near You in Dubai</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            No matter where you are in Dubai, our <strong>junk removal service</strong> is just a
            call away. We provide fast <strong>waste collection</strong> and{" "}
            <strong>garbage removal</strong> across all residential and commercial areas. From{" "}
            <strong>Dubai Marina</strong> to <strong>Arabian Ranches</strong>, from{" "}
            <strong>Business Bay</strong> to <strong>JVC</strong> — we've got you covered with
            professional <strong>waste management in Dubai</strong>.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-bold btn-hover"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }}
      />
    </>
  );
}
