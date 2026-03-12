import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data/services";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-primary-foreground bg-primary btn-hover"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" /> Call Now
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur-sm btn-hover border-l border-primary-foreground/30 bg-primary-foreground/20 bg-secondary"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </a>
    </div>
  );
};

export default StickyButtons;
