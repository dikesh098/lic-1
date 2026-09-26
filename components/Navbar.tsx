"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NilaBrand from "./NilaBrand";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/customer-support", label: "Customer Support" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <NilaBrand compact />

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink2 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/customer-login"
            className="rounded-sm border border-ink px-4 py-2 text-sm text-ink hover:bg-ink hover:text-paper"
          >
            Existing Customer Login
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-ink2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/customer-login"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-ink"
              >
                Existing Customer Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
