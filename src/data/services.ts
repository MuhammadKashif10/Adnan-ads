import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceAppliance from "@/assets/service-appliance.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceGeneral from "@/assets/service-general.jpg";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: any;
  keywords: string[];
  features: string[];
}

export const services: Service[] = [
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    shortDescription: "Furniture removal Dubai crews for old sofas, beds, tables, wardrobes, and bulky items from homes or offices.",
    description: "Need to get rid of old or broken furniture? Our professional furniture removal service in Dubai handles sofas, beds, tables, wardrobes, desks, and all types of household and office furniture. We provide fast, eco-friendly furniture disposal across all areas in Dubai. Whether you're renovating, moving, or simply decluttering, our team will handle the heavy lifting and ensure responsible disposal or recycling of your unwanted furniture.",
    image: serviceFurniture,
    keywords: ["furniture removal dubai", "old furniture disposal", "sofa removal", "junk removal service"],
    features: ["Same-day pickup available", "Heavy items handled safely", "Eco-friendly disposal", "Residential & commercial"],
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    shortDescription: "Appliance removal Dubai service for old washing machines, fridges, ACs, and household appliances.",
    description: "Got old appliances taking up space? Our appliance removal service in Dubai specializes in the safe removal and responsible disposal of refrigerators, washing machines, dryers, air conditioners, ovens, dishwashers, and more. We handle disconnection carefully and ensure all appliances are recycled or disposed of in compliance with Dubai's waste management regulations.",
    image: serviceAppliance,
    keywords: ["appliance removal dubai", "old fridge disposal", "waste removal services", "garbage removal service"],
    features: ["Safe disconnection", "All appliance types", "Recycling compliant", "Upfront estimates"],
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal",
    shortDescription: "Site cleanup and waste collection Dubai support for concrete, wood, tiles, drywall, and renovation debris.",
    description: "After a renovation or construction project, let us handle the cleanup. Our construction debris removal service in Dubai handles concrete, bricks, tiles, drywall, wood, metal, and all types of building waste. We provide efficient site clearance with proper waste segregation and disposal in accordance with Dubai Municipality regulations.",
    image: serviceConstruction,
    keywords: ["construction debris removal dubai", "renovation waste disposal", "collecting garbage", "dubai waste collection"],
    features: ["Heavy debris handling", "Site clearance", "Municipality compliant", "Large volume capacity"],
  },
  {
    slug: "garden-waste-removal",
    title: "Garden Waste Removal",
    shortDescription: "Garden waste removal Dubai service for branches, leaves, soil, and green waste cleared quickly.",
    description: "Keep your garden clean and beautiful with our garden waste removal service in Dubai. We remove tree branches, leaves, grass clippings, soil, plant pots, and all types of green waste. Whether it's a routine garden cleanup or post-landscaping clearance, our team provides fast, affordable service across all Dubai areas.",
    image: serviceGarden,
    keywords: ["garden waste removal dubai", "green waste disposal", "waste management in dubai", "collect junk"],
    features: ["Green waste recycling", "Post-landscaping cleanup", "Regular pickup plans", "Affordable rates"],
  },
  {
    slug: "general-junk-removal",
    title: "General Junk Removal",
    shortDescription: "Junk collection Dubai service for household clutter, garage cleanouts, storage clearance, and unwanted rubbish.",
    description: "From household clutter to garage cleanouts, our general junk removal service in Dubai handles it all. We remove old clothes, toys, books, boxes, broken items, and any miscellaneous junk you need gone. Our friendly team provides a smooth experience with upfront pricing and same-day service availability throughout Dubai.",
    image: serviceGeneral,
    keywords: ["junk removal dubai", "junk removal near me", "removal junk services", "junk removal service"],
    features: ["Same-day service", "Upfront pricing", "No hidden fees", "All junk types accepted"],
  },
];

export const PHONE_NUMBER = "+971557843154";
export const DISPLAY_PHONE_NUMBER = "055 784 3154";
export const WHATSAPP_NUMBER = "971557843154";
export const WHATSAPP_LINK = "https://wa.me/971557843154";
export const COMPANY_NAME = "Junk removal dubai";
export const COMPANY_EMAIL = "kashifads76@gmail.com";

export const serviceAreas = [
  "Dubai Hills", "Al Barsha South", "JLT", "Discovery Garden", "Emirates Hills",
  "Marina Dubai", "Palm Jumeirah", "Jumeirah 2", "Jumeirah Beach", "Internet City",
  "Jebel Ali Freezone", "Al Furjan", "Dubai Investment Park", "Dubai Investment City",
  "Sports City", "Motor City", "JVC", "Arabian Ranches 1", "Arabian Ranches 2",
  "Arabian Ranches 3", "Town Square", "Damac Hills", "Damac Hills 2", "Remraam",
  "Nad Al Sheba", "Jumeirah Village Circle", "The Springs", "Al Souk", "Jumeirah Park",
  "Dubai South Logistics District", "Dubai South Residential District",
  "Jumeirah Golf Estates", "Mudon", "Dubai Land Residence Complex", "Ras Al Khor",
  "Dubai Creek Harbour", "Al Mizhar", "Business Bay", "Downtown Dubai",
];

export const testimonials = [
  {
    name: "Ahmed K.",
    location: "Dubai Marina",
    text: "Excellent junk removal service! They cleared out my entire apartment in just 2 hours. Very professional and affordable. Highly recommend for anyone in Dubai.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "JVC",
    text: "Used their furniture removal service when we renovated. The team was punctual, careful, and left the place spotless. Best waste management service in Dubai!",
    rating: 5,
  },
  {
    name: "Raj P.",
    location: "Business Bay",
    text: "Called them for junk removal and they handled everything professionally. Great pricing, no hidden charges. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Arabian Ranches",
    text: "Their garden waste removal service is fantastic. Regular pickups, always on time, and very reasonable rates. The best garbage removal service in Dubai!",
    rating: 4,
  },
  {
    name: "Omar H.",
    location: "Downtown Dubai",
    text: "Fast response, same-day pickup, and fair pricing. They removed old appliances and construction debris from our villa renovation. Top-notch service!",
    rating: 5,
  },
];
