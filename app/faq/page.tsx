import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

const FAQS = [
  {
    q: "How can I contact Nila Gautam?",
    a: "You can reach Nila by phone, WhatsApp, or through the contact form on this website. Response times are typically the same day.",
  },
  {
    q: "How can existing customers access their policy details?",
    a: "Existing customers can log in through the Customer Login page to view their own policy details and documents securely.",
  },
  {
    q: "How can I request renewal assistance?",
    a: "Use the Renewal Assistance page, WhatsApp, or a phone call, and Nila will help you track and complete your renewal.",
  },
  {
    q: "How can I request a policy review?",
    a: "Visit the Policy Review page or send a message with your policy details, and Nila will get back to you to discuss it.",
  },
  {
    q: "Can I download my policy documents?",
    a: "Once logged in, customers will be able to view and download their own policy documents from their account.",
  },
  {
    q: "How do I update my contact details?",
    a: "Reach out to Nila directly by phone or WhatsApp, or submit a request through Customer Support once logged in.",
  },
  {
    q: "How can I request a call?",
    a: "Use the Request a Call page and share a few details — Nila will call you back at a suitable time.",
  },
];

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-gold">FAQ</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">Common questions</h1>

      <div className="mt-8">
        {FAQS.map((item, i) => (
          <div key={item.q} className={`border-b border-line py-5 ${i === 0 ? "border-t" : ""}`}>
            <p className="font-serif text-lg text-ink">{item.q}</p>
            <p className="mt-2 text-ink2">{item.a}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-ink2">
        For anything specific to your own policy, it&apos;s best to ask Nila
        directly rather than relying on general answers here.
      </p>
    </section>
  );
}
