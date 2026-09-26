export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-line py-6 first:pt-0 last:border-b-0">
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 max-w-prose text-ink2">{description}</p>
    </div>
  );
}
