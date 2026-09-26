import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton({
  message,
  label = "Talk on WhatsApp",
  variant = "solid",
  className = "",
}: {
  message: string;
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm transition-colors";
  const styles =
    variant === "solid"
      ? "bg-moss text-paper hover:bg-[#345943]"
      : "border border-moss text-moss hover:bg-moss/5";

  return (
    <a
      href={generateWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
      {label}
    </a>
  );
}
