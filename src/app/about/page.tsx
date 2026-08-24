import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";


export default function AboutPage() {
  return (
  <main className="min-h-screen bg-stone-50 text-stone-900">



      <Section width="narrow">

        <h1 className="text-5xl font-bold text-center">
          About Arkhaven Press
        </h1>


      </Section>

      <Section width="narrow">

        <SectionHeading>
          Our Purpose
        </SectionHeading>

        <p className="leading-8">
          Arkhaven Press exists to preserve, publish,
          and create books that we feel are worth 
          passing forward to future generations.
          We believe that thoughtful scholarship,
          careful editing,
          beautiful typography,
          and durable craftsmanship
          are not luxuries,
          but essential parts of faithful publishing.
        </p>

      </Section>

      <Section>

        <SectionHeading>
          What We Publish
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <h3 className="text-xl font-semibold">
              Scholarly Works
            </h3>

            <p className="mt-3 leading-7">
              Original works of research,
              translation,
              and commentary
              intended to serve both scholars
              and thoughtful readers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Ancient Texts
            </h3>

            <p className="mt-3 leading-7">
              Carefully edited editions of
              important historical works,
              accompanied by modern introductions
              and notes where appropriate.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Public Domain Restorations
            </h3>

            <p className="mt-3 leading-7">
              Forgotten and neglected books
              restored with fresh typography,
              careful proofreading,
              and enduring design.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Children's Books
            </h3>

            <p className="mt-3 leading-7">
              Beautiful editions created to
              cultivate imagination,
              wisdom,
              and a lifelong love of reading.
            </p>
          </div>

        </div>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Our Principles
        </SectionHeading>

        <ul className="space-y-4 leading-8">
          <li>Scholarship before novelty.</li>
          <li>Accuracy before speed.</li>
          <li>Beauty through simplicity.</li>
          <li>Books produced to endure.</li>
          <li>Readability by design.</li>
        </ul>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Current Projects
        </SectionHeading>

        <p className="leading-8">
          Arkhaven Press is presently preparing its
          first publications while laying the
          foundations for future series devoted to
          biblical studies,
          historical texts,
          restored public domain works,
          and carefully crafted editions for readers
          of every age.
        </p>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Correspondence
        </SectionHeading>

        <p className="leading-8">
          Questions, permissions, publishing
          inquiries, or simply a thoughtful note—
          we welcome correspondence from our readers.
        </p>

        <p className="mt-6 font-medium">
          info@arkhavenpress.com
        </p>

      </Section>

    </main>
  );
}