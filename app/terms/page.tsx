import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-serif text-3xl text-ink">Terms of Use</h1>
      <div className="mt-8 space-y-6 text-ink2">
        <p>
          This website is an independent personal platform for Nila Gautam,
          an LIC Insurance Advisor (Agency Code 976/04741). It is not an
          official LIC website and does not represent LIC&apos;s corporate
          office or any official LIC branch.
        </p>
        <p>
          Information on this website is provided for general guidance only.
          Policy terms, benefits, conditions, exclusions, and eligibility are
          governed by the applicable policy documents and by the insurer,
          not by anything stated on this website.
        </p>
        <p>
          Submitting an enquiry through this website does not create a
          binding agreement or guarantee any specific outcome, product, or
          rate of return. Any insurance decision should be made after a
          direct conversation with Nila Gautam and a review of the relevant
          policy documents.
        </p>
        <p>
          Customer accounts are intended for use only by the customer they
          belong to. Please keep your login credentials confidential and
          contact Nila immediately if you suspect unauthorized access.
        </p>
      </div>
    </section>
  );
}
