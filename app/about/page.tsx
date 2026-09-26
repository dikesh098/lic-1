import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_MESSAGES, ADVISOR_PHONE_DISPLAY, ADVISOR_EMAIL } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm text-gold">About</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">Meet Nila Gautam</h1>
      <p className="mt-6 max-w-prose text-ink2">
        Nila Gautam works as an LIC Insurance Advisor, helping individuals and
        families understand their insurance options and stay on top of their
        existing policies. Her focus is on personal, direct assistance — from
        a first conversation about what cover might suit a family, through to
        ongoing help with renewals and policy servicing over the years that
        follow.
      </p>
      <p className="mt-4 max-w-prose text-ink2">
        Customers can reach Nila directly for questions about their policy,
        help with an upcoming renewal, or general guidance on insurance
        options — by phone, WhatsApp, or through this website.
      </p>

      <div className="mt-10 border border-line bg-paper2 p-6">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-ink2">Name</dt>
            <dd className="text-ink">Nila Gautam</dd>
          </div>
          <div>
            <dt className="text-sm text-ink2">Role</dt>
            <dd className="text-ink">LIC Insurance Advisor</dd>
          </div>
          <div>
            <dt className="text-sm text-ink2">Agency Code</dt>
            <dd className="text-ink">976/04741</dd>
          </div>
          <div>
            <dt className="text-sm text-ink2">Phone</dt>
            <dd className="text-ink">{ADVISOR_PHONE_DISPLAY}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink2">Email</dt>
            <dd className="text-ink">{ADVISOR_EMAIL}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-ink">Need help with your policy?</p>
        <WhatsAppButton message={WHATSAPP_MESSAGES.general} label="Contact Nila" />
      </div>
    </section>
  );
}
