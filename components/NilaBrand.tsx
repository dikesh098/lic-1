import Link from "next/link";

/**
 * Text-based brand mark for Nila Gautam. Swap in a logo image later
 * without touching any page that renders this component.
 */
export default function NilaBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex flex-col leading-none">
      <span
        className={`font-serif text-ink ${compact ? "text-lg" : "text-xl"}`}
      >
        Nila Gautam
      </span>
      {!compact && (
        <span className="mt-1 text-[0.7rem] text-ink2">
          LIC Insurance Advisor, Agency 976/04741
        </span>
      )}
    </Link>
  );
}
