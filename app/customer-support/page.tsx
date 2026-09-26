import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Customer Support" };

const OPTIONS = [
  {
    title: "Existing policy question",
    description: "Ask about something specific to a policy you already hold.",
  },
  {
    title: "Renewal assistance",
    description: "Get help tracking a due date or completing a renewal.",
  },
  {
    title: "Document request",
    description: "Request a copy of a policy document or receipt.",
  },
  {
    title: "Update your details",
    description: "Let Nila know about a change of address, phone number, or nominee.",
  },
];

export default function CustomerSupportPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm text-gold">Customer Support</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        Already a customer? Here&apos;s how to get help.
      </h1>
      <p className="mt-4 max-w-prose text-ink2">
        Existing customers can log in to view policy details and documents,
        or reach Nila directly for anything that needs a personal answer.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/customer-login"
          className="inline-flex items-center justify-center rounded-sm bg-ink px-5 py-3 text-sm text-paper hover:bg-ink2"
        >
          Log in to your account
        </Link>
        <WhatsAppButton message={WHATSAPP_MESSAGES.support} variant="outline" />
        <CallButton />
      </div>

      <div className="mt-12">
        {OPTIONS.map((o, i) => (
          <div key={o.title} className={`border-b border-line py-5 ${i === 0 ? "border-t" : ""}`}>
            <p className="font-serif text-lg text-ink">{o.title}</p>
            <p className="mt-1 text-ink2">{o.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
