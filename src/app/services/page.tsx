import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import { PHONE_NUMBER, COMPANY_EMAIL } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Junk Removal & Waste Management Dubai",
  description: "Professional junk removal services in Dubai: furniture removal, appliance disposal, construction debris, garden waste, and general junk removal.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <>

      <section className="section-padding bg-accent">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Our Junk Removal Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From furniture and appliances to construction debris and garden waste — we provide comprehensive waste removal services across Dubai.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Waste Management and Junk Removal Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "CleanUp Dubai",
              "telephone": PHONE_NUMBER,
              "email": COMPANY_EMAIL,
              "url": "https://www.cleanupdubai.ae"
            },
            "areaServed": {
              "@type": "City",
              "name": "Dubai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Junk Removal Services in Dubai",
              "itemListElement": services.map((s, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.shortDescription,
                  "url": `https://www.cleanupdubai.ae/services/${s.slug}`
                },
                "position": index + 1
              }))
            }
          })
        }}
      />
    </>
  );
};

