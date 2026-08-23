import Section from "./Section";
import Link from "next/link";
export default function Hero() {
  return (
    <Section width="narrow">
          <div className="text-center">
      <h1 className="text-5xl font-bold tracking-normal">
        Arkhaven Press
      </h1>

      <p className="mt-6 text-2xl italic text-stone-600">
        Publishing works of lasting value.
      </p>

      <p className="mx-auto mt-10 max-w-2xl text-lg leading-8">
        Through careful scholarship,
        thoughtful translation,
        and beautifully crafted editions,
        Arkhaven Press seeks to preserve and publish
        works worthy of future generations.
      </p>
      </div>

      <div className="mt-12 flex justify-center gap-4">
     
        <Link href="/about">
  <button className="rounded border border-stone-900 px-6 py-3 hover:bg-stone-200">
    About the Press
  </button>
</Link>

      </div>
    </Section>
  );
}