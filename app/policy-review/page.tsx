import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Policy Review",
  description: "Ask Nila Gautam to review or clarify an existing LIC policy.",
};

export default function PolicyReviewPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-gold">Policy Review</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        Not sure what your policy actually covers?
      </h1>
      <p className="mt-4 text-ink2">
        If you already hold a policy and would like Nila to go through it
        with you — what it covers, what&apos;s due, or anything that&apos;s
        unclear — share your details and she will follow up directly. For
        specifics tied to your policy, it&apos;s best to discuss it one to
        one rather than over a form.
      </p>
      <div className="mt-10">
        <EnquiryForm />
      </div>
    </section>
  );
}
