import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";


export default function ResearchPage() {
  return (
<main className="min-h-screen bg-stone-50 text-stone-900">

  

      <Section width="narrow">

        <h1 className="text-5xl font-bold tracking-tight text-center">
          Editorial Notes
        </h1>

        <p className="mt-6 text-center text-2xl italic text-stone-600">
          Reflections on books, manuscripts,
          and the craft of publishing.
        </p>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          A Publisher's Workshop
        </SectionHeading>

        <p className="leading-8">
          Every finished volume begins long before it
          reaches the press. This page offers a glimpse
          into that quieter work: translation,
          textual criticism, typography,
          book design, and the countless small decisions
          that shape a carefully made edition.
        </p>

      </Section>

      <Section>

        <SectionHeading>
          Current Notes
        </SectionHeading>

        <div className="space-y-10">

          <article>

            <h3 className="text-xl font-semibold">
              Translating Ben Sira
            </h3>

            <p className="mt-3 leading-8">
              Notes from an ongoing translation project,
              including textual comparisons,
              difficult readings,
              and editorial decisions.
            </p>

          </article>

          <article>

            <h3 className="text-xl font-semibold">
              Forgotten Books Worth Reading Again
            </h3>

            <p className="mt-3 leading-8">
              Reflections on public domain works that
              deserve thoughtful restoration and a new
              generation of readers.
            </p>

          </article>

          <article>

            <h3 className="text-xl font-semibold">
              Why Typography Matters
            </h3>

            <p className="mt-3 leading-8">
              Small decisions in type, spacing,
              margins, and layout profoundly influence
              the reading experience.
            </p>

          </article>

        </div>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Projects in Progress
        </SectionHeading>

        <ul className="space-y-4">

          <li>• Ben Sira Translation & Commentary</li>

          <li>• Public Domain Restoration Series</li>

          <li>• Children's Classics</li>

          <li>• Publisher Design Standards</li>

        </ul>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Looking Ahead
        </SectionHeading>

        <p className="leading-8">
          As Arkhaven Press grows,
          this section will become an archive of
          editorial essays, translation notes,
          publication updates,
          and observations from the workbench of a
          small publishing house devoted to enduring books.
        </p>

      </Section>

    </main>
  );
}