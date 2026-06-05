import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import ServiceGallery from "@/components/ServiceGallery";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { services, PHONE_NUMBER, WHATSAPP_LINK, testimonials } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import TestimonialSlider from "@/components/TestimonialSlider";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} in Dubai | Professional Junk Removal Service`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} service in Dubai. Call now for an estimate!`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    redirect("/services");
  }

  const relatedTestimonials = testimonials.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} in Dubai`,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "CleanUp Dubai",
      "telephone": PHONE_NUMBER,
      "email": "info@cleanupdubai.ae",
      "image": "https://www.cleanupdubai.ae/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "serviceType": service.title,
    "url": `https://www.cleanupdubai.ae/services/${service.slug}`
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image 
          src={service.image as any} 
          alt={service.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-max px-4 md:px-8">
            <h1 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">{service.title} in Dubai</h1>
            <p className="text-primary-foreground/80 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-heading mb-4">About Our {service.title} Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

            <h3 className="text-xl font-heading mb-4">What's Included</h3>
            <ul className="space-y-3 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            {/* Image Gallery */}
            <h3 className="text-xl font-heading mb-4">Service Gallery</h3>
            <ServiceGallery 
              title={service.title} 
              images={[service.image, ...services.filter(s => s.slug !== service.slug).slice(0, 3).map(s => s.image)]} 
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="font-heading font-bold text-lg mb-4">Get Pricing</h3>
              <p className="text-sm text-muted-foreground mb-4">Ready to clear out the junk? Contact us now for fast, affordable {service.title.toLowerCase()} in Dubai.</p>
              <div className="space-y-3">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm btn-hover">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm btn-hover">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-bold text-lg mb-4">Related Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((k) => (
                  <span key={k} className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-full">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider 
        items={relatedTestimonials} 
        title="What Clients Say" 
        subtitle="" 
        bgClass="bg-muted" 
      />

      <ContactForm />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

