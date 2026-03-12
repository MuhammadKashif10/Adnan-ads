import type { Metadata } from "next";
import Image from "next/image";
import aboutTeam from "@/assets/about-team.jpg";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import { Target, Users, Award, Heart } from "lucide-react";
import { PHONE_NUMBER, COMPANY_EMAIL, COMPANY_NAME } from "@/data/services";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide Dubai with the fastest, most reliable, and eco-friendly junk removal and waste management service.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our trained professionals handle every job with care, from small pickups to large-scale commercial cleanouts.",
  },
  {
    icon: Award,
    title: "Years of Experience",
    description:
      "With years of experience serving Dubai, we've built a reputation as the city's leading garbage removal service.",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description:
      "We recycle and donate over 60% of collected items, contributing to sustainable waste management in Dubai.",
  },
];

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_NAME} - Junk Removal & Waste Management`,
  description:
    `Learn about ${COMPANY_NAME}, the leading junk removal and waste management service in Dubai. Years of experience in professional garbage removal across all Dubai areas.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${COMPANY_NAME} — Waste Management Excellence`,
    description:
      `Learn about ${COMPANY_NAME}, the leading junk removal and waste management service. Professional garbage removal across all Dubai areas.`,
    url: "/about",
    type: "website",
  },
  twitter: {
    title: `About ${COMPANY_NAME} — Waste Management Excellence`,
    description:
      "Dubai's most trusted junk removal company. Professional waste management and garbage removal.",
  },
};

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${COMPANY_NAME}`,
    description:
      `${COMPANY_NAME} is Dubai's most trusted junk removal and waste management company since 2022. Experience in professional garbage removal.`,
    url: "https://www.cleanupdubai.ae/about",
    mainEntity: {
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      foundingDate: "2022",
      url: "https://www.cleanupdubai.ae",
      telephone: PHONE_NUMBER,
      email: COMPANY_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
      },
      knowsAbout: [
        "Junk Removal",
        "Waste Management",
        "Garbage Removal",
        "Furniture Removal",
        "Appliance Disposal",
        "Construction Debris Removal",
      ],
    },
  };

  return (
    <>
      <section className="section-padding bg-accent">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">About {COMPANY_NAME}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dubai's most trusted junk removal and waste management company since 2022
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-heading mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2022, {COMPANY_NAME} started with a simple mission: make{" "}
              <strong>junk removal in Dubai</strong> easy, affordable, and environmentally
              responsible. What began as a small team with one truck has grown into a full-service{" "}
              <strong>waste management</strong> company serving thousands of residential and
              commercial clients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, we're proud to be recognized as one of the top{" "}
              <strong>garbage removal services in Dubai</strong>. Our experienced team handles
              everything from furniture and appliance removal to construction debris cleanup and
              garden waste disposal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe in sustainable <strong>waste management in Dubai</strong>. That's why we
              partner with recycling facilities and charitable organizations to ensure your unwanted
              items find new life whenever possible.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-bold btn-hover"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
            <Image
              src={aboutTeam}
              alt={`${COMPANY_NAME} professional junk removal team in Dubai`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-heading text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 text-center hover-card-effect border border-border"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  );
};

export default About;
