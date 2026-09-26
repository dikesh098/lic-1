import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { WHATSAPP_MESSAGES, ADVISOR_PHONE_DISPLAY, ADVISOR_EMAIL } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-gold">Contact</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">Get in touch with Nila</h1>
      <p className="mt-4 text-ink2">
        {ADVISOR_PHONE_DISPLAY}
        <br />
        {ADVISOR_EMAIL}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
        <CallButton variant="outline" />
      </div>

      <div className="mt-12">
        <EnquiryForm />
      </div>
    </section>
  );
}
