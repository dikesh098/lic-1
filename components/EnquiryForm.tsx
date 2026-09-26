"use client";

import { useState, FormEvent } from "react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const REQUIREMENTS = [
  "Life Insurance",
  "Policy Renewal",
  "Existing Policy Support",
  "Policy Review",
  "Family Protection",
  "Child / Education Planning",
  "Retirement / Pension",
  "Other",
];

type FormState = {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  requirement: string;
  message: string;
  contactMethod: "whatsapp" | "call";
  consent: boolean;
};

const INITIAL: FormState = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  requirement: REQUIREMENTS[0],
  message: "",
  contactMethod: "whatsapp",
  consent: false,
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(values.mobile.trim()))
    errors.mobile = "Enter a valid 10-digit mobile number.";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.city.trim()) errors.city = "Enter your city.";
  if (!values.consent) errors.consent = "Please provide consent to be contacted.";
  return errors;
}

export default function EnquiryForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO (phase 2): insert this lead into Supabase `leads` table via a
    // server action once the database is provisioned. For now the enquiry
    // is confirmed on-screen and the customer is handed off to WhatsApp.
    setSubmitted(true);
  }

  if (submitted) {
    const waMessage = `Hello Nila Ma'am, I just submitted an enquiry on your website regarding ${values.requirement}. My name is ${values.fullName}.`;
    return (
      <div className="rounded-sm border border-moss/30 bg-moss/5 p-6">
        <p className="font-serif text-lg text-ink">Thank you, {values.fullName}.</p>
        <p className="mt-2 text-ink2">
          Your request has been received. Nila will get back to you by{" "}
          {values.contactMethod === "whatsapp" ? "WhatsApp" : "phone call"} shortly.
        </p>
        <a
          href={generateWhatsAppLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-sm bg-moss px-5 py-3 text-sm text-paper"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName}>
          <input
            type="text"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Mobile Number" error={errors.mobile}>
          <input
            type="tel"
            inputMode="numeric"
            value={values.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            className="input"
            placeholder="10-digit mobile number"
          />
        </Field>
        <Field label="Email (optional)" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="City" error={errors.city}>
          <input
            type="text"
            value={values.city}
            onChange={(e) => update("city", e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label="What do you need help with?">
        <select
          value={values.requirement}
          onChange={(e) => update("requirement", e.target.value)}
          className="input"
        >
          {REQUIREMENTS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message (optional)">
        <textarea
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="input resize-none"
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm text-ink2">Preferred contact method</legend>
        <div className="flex gap-6">
          {(["whatsapp", "call"] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="contactMethod"
                checked={values.contactMethod === method}
                onChange={() => update("contactMethod", method)}
              />
              {method === "whatsapp" ? "WhatsApp" : "Phone call"}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-ink2">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1"
        />
        I agree to be contacted by Nila Gautam regarding my enquiry.
      </label>
      {errors.consent && <p className="text-sm text-rust">{errors.consent}</p>}

      <button
        type="submit"
        className="w-full rounded-sm bg-ink py-3 text-sm text-paper hover:bg-ink2 sm:w-auto sm:px-8"
      >
        Request a Call
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ink2">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-rust">{error}</span>}
    </label>
  );
}
