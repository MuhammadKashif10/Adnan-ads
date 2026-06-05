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
  title: "Junk Removal Dubai | Same Day Waste & Garbage Removal",
  description:
    "Professional junk removal Dubai service for homes and businesses. Same day junk pickup, furniture removal, appliance removal, rubbish removal, and waste collection in Dubai.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Junk Removal Dubai | Same Day Waste & Garbage Removal",
    description:
      "Fast junk removal service Dubai residents trust for furniture, appliances, rubbish, garden waste, and garbage removal Dubai-wide.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Junk Removal Dubai | Same Day Waste & Garbage Removal",
    description:
      "Fast, affordable junk pickup Dubai-wide with reliable waste collection and rubbish removal for homes and businesses.",
  },
};

const heroSlides = [
  {
    image: hero1,
    title: "Junk Removal Dubai - Fast Same-Day Pickup",
    subtitle:
      "Book same day junk removal Dubai service for homes, villas, offices, and shops. We handle junk pickup Dubai-wide, from furniture and appliances to rubbish and renovation waste.",
  },
  {
    image: hero2,
    title: "Waste & Garbage Removal Dubai Can Rely On",
    subtitle:
      "From house clearance Dubai projects to commercial waste removal Dubai jobs, our local team provides careful loading, clean collection, and responsible disposal.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Pickup",
    description: "Book today for same day junk removal Dubai service when you need junk removal near me without the wait.",
  },
  {
    icon: Truck,
    title: "Full-Service Removal",
    description: "We handle loading, hauling, rubbish removal Dubai collections, and responsible disposal of all waste types.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "A dependable junk removal company Dubai customers can call for compliant waste collection and clear communication.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Disposal",
    description: "We recycle and donate wherever possible, keeping waste removal Dubai services cleaner and more responsible.",
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
            Junk Removal, Waste Collection & Rubbish Removal in Dubai
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Professional junk removal service Dubai-wide for homes, offices, shops, gardens, and
            construction sites. We handle garbage removal Dubai, junk collection Dubai, and
            affordable waste pickup with careful loading included.
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
            Why Choose Our Dubai Junk Removal Company
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Clear quotes, reliable scheduling, and local crews for customers comparing cheap junk removal Dubai options.
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
            Complete Junk Removal & Waste Management Across Dubai
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Looking for reliable <strong>junk removal Dubai</strong> support without delays?
            CleanUp Dubai helps with <strong>waste removal Dubai</strong> jobs of every size,
            including <strong>furniture removal Dubai</strong>,{" "}
            <strong>appliance removal Dubai</strong>, <strong>garden waste removal Dubai</strong>,
            and <strong>house clearance Dubai</strong>. Whether you need a single item collected,
            a full villa cleared, or scheduled <strong>waste collection Dubai</strong> for a
            business, our team keeps the process simple from quote to cleanup. Many customers find
            us while searching for the <strong>best junk removal Dubai</strong> option nearby, and
            they choose us for punctual arrivals, upfront pricing, and careful handling. Contact us
            today for fast <strong>garbage removal Dubai</strong> and a cleaner space anywhere in
            Dubai.
          </p>
        </div>
      </section>

      <TestimonialSlider
        subtitle="Trusted for same-day junk pickup, rubbish removal, and waste collection across Dubai"
      />
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
