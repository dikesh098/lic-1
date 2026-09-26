export default function SectionHeading({
  title,
  supporting,
}: {
  title: string;
  supporting?: string;
}) {
  return (
    <div className="max-w-prose">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      {supporting && <p className="mt-3 text-ink2">{supporting}</p>}
    </div>
  );
}
