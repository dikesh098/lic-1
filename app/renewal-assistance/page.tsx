import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Renewal Assistance",
  description: "Get help tracking a premium due date or completing an LIC policy renewal.",
};

export default function RenewalAssistancePage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-gold">Renewal Assistance</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        Don&apos;t let a renewal slip past.
      </h1>
      <p className="mt-4 text-ink2">
        Whether you&apos;re unsure of your next due date or need help
        completing the renewal itself, share your details below and Nila
        will follow up to sort it out with you.
      </p>
      <div className="mt-10">
        <EnquiryForm />
      </div>
    </section>
  );
}
