import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import BookCard from "@/components/BookCard";


export default function BooksPage() {
  return (
   <main className="min-h-screen bg-stone-50 text-stone-900">



      <Section width="narrow">

        <h1 className="text-5xl font-bold tracking-tight text-center">
          Books
        </h1>

        <p className="mt-6 text-center text-2xl italic text-stone-600">
          Carefully prepared editions for thoughtful readers.
        </p>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Our Catalogue
        </SectionHeading>

        <p className="leading-8">
          Every volume published by Arkhaven Press is
          selected and prepared with the conviction
          that books should reward repeated reading.
          Whether newly written or carefully restored,
          each edition is intended to endure.
        </p>

      </Section>

      <Section>

        <SectionHeading>
          Current Publications
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <BookCard
            title="Ben Sira"
            subtitle="Translation & Commentary"
            status="In Preparation"
          />

        </div>

      </Section>

      <Section>

        <SectionHeading>
          Publishing Series
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-2">

          <div>

            <h3 className="text-xl font-semibold">
              Ancient Texts
            </h3>

            <p className="mt-3 leading-8">
              Carefully edited editions of important
              historical and religious writings.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Public Domain Library
            </h3>

            <p className="mt-3 leading-8">
              Forgotten books restored with modern
              typography and careful proofreading.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Original Scholarship
            </h3>

            <p className="mt-3 leading-8">
              New works devoted to biblical studies,
              history, and thoughtful research.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Children's Books
            </h3>

            <p className="mt-3 leading-8">
              Beautiful books intended to cultivate
              imagination, wisdom,
              and a lifelong love of reading.
            </p>

          </div>

        </div>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Looking Ahead
        </SectionHeading>

        <p className="leading-8">
          The catalogue of Arkhaven Press will grow
          slowly and intentionally.
          We believe thoughtful publishing values
          careful selection over rapid expansion.
        </p>

      </Section>

    </main>
  );
}