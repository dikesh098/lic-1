import Link from "next/link";
import NilaBrand from "./NilaBrand";
import { ADVISOR_PHONE_DISPLAY, ADVISOR_EMAIL } from "@/lib/whatsapp";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Site",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/customer-support", label: "Customer Support" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/customer-login", label: "Customer Login" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper2">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <NilaBrand />
            <p className="mt-4 max-w-xs text-sm text-ink2">
              {ADVISOR_PHONE_DISPLAY}
              <br />
              {ADVISOR_EMAIL}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-ink">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink2 hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-t border-line pt-6 text-xs leading-relaxed text-ink2">
          Insurance-related information on this site is provided for general
          guidance. Policy terms, benefits, conditions, exclusions and
          eligibility are subject to the applicable policy documents and
          insurer terms. Nila Gautam is an LIC Insurance Advisor and is not
          affiliated with, and does not represent, LIC&apos;s corporate office
          or any official LIC branch.
        </p>

        <p className="mt-6 text-xs text-ink2">
          © {new Date().getFullYear()} Nila Gautam, LIC Insurance Advisor.
        </p>
      </div>
    </footer>
  );
}
