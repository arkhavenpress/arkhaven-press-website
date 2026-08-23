type BookCardProps = {
  title: string;
  subtitle: string;
  status: string;
};

export default function BookCard({
  title,
  subtitle,
  status,
}: BookCardProps) {
  return (
    <div className="rounded-lg border border-stone-300 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-stone-600">
        {subtitle}
      </p>

      <p className="mt-6 text-sm uppercase tracking-wide text-green-700">
        {status}
      </p>

      <button className="mt-6 rounded bg-stone-900 px-4 py-2 text-white">
        Learn More
      </button>
    </div>
  );
}