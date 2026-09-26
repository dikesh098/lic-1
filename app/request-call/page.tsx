import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Request a Call",
  description: "Share a few details and Nila Gautam will call you back to discuss your insurance requirements.",
};

export default function RequestCallPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-gold">Request a Call</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        Prefer to talk it through? Nila will call you.
      </h1>
      <p className="mt-4 text-ink2">
        Share a few details below and choose a time that works — Nila will
        call to understand your requirement and answer your questions
        directly.
      </p>
      <div className="mt-10">
        <EnquiryForm />
      </div>
    </section>
  );
}
