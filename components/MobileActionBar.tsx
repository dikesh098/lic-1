import { MessageCircle, Phone } from "lucide-react";
import { generateWhatsAppLink, WHATSAPP_MESSAGES, ADVISOR_PHONE_TEL } from "@/lib/whatsapp";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-paper md:hidden">
      <a
        href={`tel:${ADVISOR_PHONE_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-line py-3 text-sm text-ink"
      >
        <Phone size={16} aria-hidden="true" />
        Call
      </a>
      <a
        href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-moss py-3 text-sm text-paper"
      >
        <MessageCircle size={16} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
