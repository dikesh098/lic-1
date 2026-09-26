import type { Metadata } from "next";
import { ADVISOR_EMAIL } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-serif text-3xl text-ink">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-ink2">
        <p>
          This website is operated by Nila Gautam, an LIC Insurance Advisor
          (Agency Code 976/04741), to provide information and customer
          support to existing and prospective customers.
        </p>
        <p>
          When you submit an enquiry or log in as a customer, we collect
          information such as your name, mobile number, email, city, and
          details relevant to your insurance requirements or existing
          policies. This information is used only to respond to your enquiry
          and to service your policy relationship with Nila Gautam.
        </p>
        <p>
          Customer account data and policy documents are stored securely and
          are accessible only to the customer they belong to and to Nila
          Gautam, in line with the access controls built into this website.
        </p>
        <p>
          We do not sell or share your information with third parties for
          marketing purposes. Information may be shared where required by
          law or by LIC&apos;s own policy administration processes.
        </p>
        <p>
          If you have questions about how your information is used, contact{" "}
          {ADVISOR_EMAIL}.
        </p>
        <p className="text-sm">
          This page will be updated as the customer portal and additional
          data-handling features are introduced.
        </p>
      </div>
    </section>
  );
}
