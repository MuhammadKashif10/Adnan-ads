import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover-card-effect"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={service.image as any}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
