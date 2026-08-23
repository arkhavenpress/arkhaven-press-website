export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-8 py-24 text-center">
      <h1 className="text-6xl font-bold tracking-tight">
        Arkhaven Press
      </h1>

      <p className="mt-6 text-2xl italic text-stone-600">
        Publishing works of enduring value.
      </p>

      <p className="mx-auto mt-10 max-w-2xl text-lg leading-8">
        Through careful scholarship,
        thoughtful translation,
        and beautifully crafted editions,
        Arkhaven Press seeks to preserve and publish
        works worthy of future generations.
      </p>

      <div className="mt-12 flex justify-center gap-4">
        <button className="rounded bg-stone-900 px-6 py-3 text-white hover:bg-stone-700">
          Explore Books
        </button>

        <button className="rounded border border-stone-900 px-6 py-3 hover:bg-stone-200">
          About the Press
        </button>
      </div>
    </section>
  );
}