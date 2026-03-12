import type { Metadata } from "next";
import { Truck, Clock, ShieldCheck, Recycle } from "lucide-react";
import { services, PHONE_NUMBER, WHATSAPP_NUMBER, COMPANY_EMAIL, serviceAreas } from "@/data/services";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Junk Removal Dubai | #1 Waste Management & Garbage Removal Service",
  description:
    "Professional junk removal service in Dubai. Furniture removal, appliance disposal, construction debris cleanup. Dubai waste collection, garbage removal service. Call now for a free estimate!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Junk Removal Dubai | #1 Waste Management & Garbage Removal Service",
    description:
      "Professional junk removal service in Dubai. Furniture removal, appliance disposal, construction debris cleanup. Dubai waste collection and garbage removal.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Junk Removal Dubai | #1 Waste Management & Garbage Removal Service",
    description:
      "Professional junk removal service in Dubai. Fast, affordable waste collection and garbage removal across all Dubai areas.",
  },
};

const heroSlides = [
  {
    image: hero1,
    title: "Dubai's #1 Junk Removal Service",
    subtitle:
      "Fast, affordable waste collection and garbage removal service across all Dubai areas. We collect junk, furniture, appliances, and construction debris.",
  },
  {
    image: hero2,
    title: "Professional Waste Management in Dubai",
    subtitle:
      "From residential cleanouts to commercial waste removal services — trust Dubai's leading junk removal experts for eco-friendly disposal.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Book today, we collect today. Fast junk removal near you in Dubai.",
  },
  {
    icon: Truck,
    title: "Full-Service Removal",
    description: "We handle loading, hauling, and responsible disposal of all waste types.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed waste management service compliant with Dubai regulations.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Disposal",
    description: "We recycle and donate wherever possible for sustainable waste management.",
  },
];

const Home = () => {
  // JSON-LD: LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.cleanupdubai.ae/#localbusiness",
    name: "CleanUp Dubai",
    url: "https://www.cleanupdubai.ae",
    logo: "https://www.cleanupdubai.ae/logo.png",
    image: "https://www.cleanupdubai.ae/logo.png",
    telephone: PHONE_NUMBER,
    email: COMPANY_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Dubai`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
    priceRange: "$$",
    sameAs: [],
  };

  // JSON-LD: Service list
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Junk Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "CleanUp Dubai",
      url: "https://www.cleanupdubai.ae",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
          url: `https://www.cleanupdubai.ae/services/${s.slug}`,
        },
      })),
    },
  };

  // JSON-LD: WebSite (for sitelinks search box)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CleanUp Dubai",
    url: "https://www.cleanupdubai.ae",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.cleanupdubai.ae/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <HeroSlider slides={heroSlides} />
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-3">
            Our Junk Removal Services in Dubai
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Professional waste removal services for homes, offices, and construction sites. We
            handle all types of garbage removal in Dubai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-bold btn-hover"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-3">
            Why Choose Our Waste Management Service
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Dubai's most trusted junk removal and waste collection company
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 text-center hover-card-effect border border-border"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Complete Junk Removal & Waste Management in Dubai
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Looking for reliable <strong>junk removal in Dubai</strong>? CleanUp Dubai is your
            go-to partner for all <strong>waste removal services</strong>. Whether you need{" "}
            <strong>garbage removal service</strong>, <strong>dubai waste collection</strong>, or
            professional <strong>waste management in Dubai</strong>, our team is ready to help. We
            specialize in <strong>collecting garbage</strong> and providing top-rated{" "}
            <strong>junk removal service</strong> across the city. Search for{" "}
            <strong>junk removal near me</strong> and you'll find us — the most trusted name in{" "}
            <strong>removal junk services</strong>. We <strong>collect junk</strong> from homes,
            offices, and construction sites throughout <strong>Dubai</strong>. Contact us today for
            fast <strong>garbage removal Dubai</strong> service!
          </p>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default Home;
