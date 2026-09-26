import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import EnquiryForm from "@/components/EnquiryForm";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const STATS = [
  { value: "200+", label: "Policies under active service" },
  { value: "1:1", label: "Personal assistance, not a call centre" },
  { value: "Renewals", label: "Tracked and followed up" },
];

const SERVICES_PREVIEW = [
  {
    title: "Life Insurance Guidance",
    description:
      "Personalized assistance for customers exploring life insurance options suited to their family's needs.",
  },
  {
    title: "Premium & Renewal Assistance",
    description:
      "Support in tracking important premium due dates and staying ahead of renewal requirements.",
  },
  {
    title: "Policy Servicing Assistance",
    description:
      "Help understanding and managing the day-to-day requirements of an existing policy.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <p className="text-sm text-gold">LIC Insurance Advisor</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Helping families protect what matters most.
            </h1>
            <p className="mt-5 max-w-prose text-ink2">
              Personalized insurance guidance, policy servicing assistance,
              renewal support, and direct customer service from Nila Gautam.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
              <Link
                href="/request-call"
                className="inline-flex items-center justify-center rounded-sm border border-ink px-5 py-3 text-sm text-ink hover:bg-ink hover:text-paper"
              >
                Request a Call
              </Link>
            </div>
            <Link
              href="/customer-login"
              className="mt-6 inline-block text-sm text-ink2 underline underline-offset-4"
            >
              Existing customer? Log in to view your policies
            </Link>
          </div>

          <div className="self-start border border-line bg-paper2 p-6">
            {STATS.map((s, i) => (
              <div key={s.label} className={i > 0 ? "mt-5 border-t border-line pt-5" : ""}>
                <p className="font-serif text-2xl text-ink">{s.value}</p>
                <p className="mt-1 text-sm text-ink2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          title="How Nila can help"
          supporting="A few of the ways customers work with Nila day to day."
        />
        <div className="mt-8">
          {SERVICES_PREVIEW.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <Link href="/services" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">
          See all services
        </Link>
      </section>

      {/* Enquiry */}
      <section className="border-t border-line bg-paper2">
        <div className="mx-auto max-w-2xl px-5 py-16">
          <SectionHeading
            title="Need help with your policy?"
            supporting="Share a few details and Nila will get in touch directly."
          />
          <div className="mt-8">
            <EnquiryForm />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <CallButton />
          </div>
        </div>
      </section>
    </>
  );
}
