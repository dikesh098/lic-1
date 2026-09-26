import { Phone } from "lucide-react";
import { ADVISOR_PHONE_TEL, ADVISOR_PHONE_DISPLAY } from "@/lib/whatsapp";

export default function CallButton({
  label,
  variant = "outline",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm transition-colors";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-ink2"
      : "border border-ink text-ink hover:bg-ink/5";

  return (
    <a href={`tel:${ADVISOR_PHONE_TEL}`} className={`${base} ${styles} ${className}`}>
      <Phone size={16} strokeWidth={2} aria-hidden="true" />
      {label ?? `Call ${ADVISOR_PHONE_DISPLAY}`}
    </a>
  );
}
