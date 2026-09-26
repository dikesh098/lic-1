import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Customer Login" };

// The customer portal (Supabase Auth, dashboard, policies, documents) is
// built in phase 2 of this project. This page is a placeholder so the
// link works from the public site in the meantime.
export default function CustomerLoginPage() {
  return (
    <section className="mx-auto max-w-md px-5 py-20 text-center">
      <h1 className="font-serif text-2xl text-ink">Customer Login</h1>
      <p className="mt-4 text-ink2">
        The secure customer portal is being set up. In the meantime, reach
        Nila directly for anything you&apos;d normally check in your
        account.
      </p>
      <div className="mt-8 flex justify-center">
        <WhatsAppButton message={WHATSAPP_MESSAGES.support} />
      </div>
    </section>
  );
}
