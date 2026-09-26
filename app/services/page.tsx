import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Services" };

const SERVICES = [
  {
    title: "Life Insurance Guidance",
    description:
      "Personalized assistance for customers exploring life insurance options — explained in plain terms, with no pressure to decide on the spot.",
  },
  {
    title: "Policy Servicing Assistance",
    description:
      "Help understanding and managing the ongoing requirements of an existing policy, from paperwork questions to updating personal details.",
  },
  {
    title: "Premium & Renewal Assistance",
    description:
      "Support in tracking important premium due dates and staying ahead of renewal requirements, so a policy never lapses by accident.",
  },
  {
    title: "Policy Review",
    description:
      "A chance for existing customers to request a review or clarification regarding their current policies and what they cover.",
  },
  {
    title: "Customer Support",
    description:
      "A direct communication channel with Nila for any question, by phone, WhatsApp, or through this website.",
  },
  {
    title: "Family Protection Planning",
    description:
      "General informational guidance around protecting a family's financial needs through appropriate insurance products, discussed one to one.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm text-gold">Services</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        How Nila works with her customers
      </h1>
      <p className="mt-4 max-w-prose text-ink2">
        Every customer&apos;s situation is different. These are starting
        points for a conversation, not automatic recommendations — Nila will
        always discuss your specific requirements with you directly.
      </p>

      <div className="mt-10">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-8">
        <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
      </div>
    </section>
  );
}
