import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function BenSiraPage() {
  return (
    <main>

      <Section width="narrow">

        <h1 className="text-5xl font-bold tracking-tight text-center">
          The Wisdom of Joshua
        </h1>

<p className="mt-6 text-center text-2ml">
          (Also known as Sirach or Ecclesiasticus)
        </p>

        <p className="mt-6 text-center text-2xl italic text-stone-600">
          A New Translation and Reconstruction
        </p>

        <p className="mt-6 text-center uppercase tracking-widest text-green-700">
          In Preparation
        </p>

      </Section>

<Section width="narrow">

<SectionHeading>
          The Wisdom of Joshua pairs beautifully with the Holy Bible as we know it today. 
        </SectionHeading>

<p className="mt-6 leading-8">
            

The book, as we have received it, fits remarkably well with the rest of the known Bible, 
sharpening and expanding on a wide variety of topics without obvious contradictions to the traditionally accepted cannon.

</p>
<p className="mt-6 leading-8">
Some sections, curiously, even have the feel of being prophecy. 

</p>
<p className="mt-6 leading-8">

This book, although a careful reconstruction, should not be taken as the exact 
authoritative text that would have originally been present. 
It follows closely the arcs and intents of the original work, 
but exact words are often just out of reach despite our best efforts.  

</p>
<p className="mt-6 leading-8">

The text remains a valuable resource for study and reflection regardless 
as the competence of the author shines through despite the many years 
of damage, degradation, and drift. 

</p>
<p className="mt-6 leading-8">

It is our earnest hope that this book can once more be read as it was intended, and that you may come away with more wisdom than which you came. 
</p>
</Section>

      <Section width="narrow">


        <SectionHeading>
          About the Project
        </SectionHeading>

        <p className="leading-8">
          This edition seeks to provide an English
          translation of the Wisdom of Joshua based upon
          careful study of the surviving Hebrew,
          Greek, and Syriac witnesses to faithfully recover the original 
          arc and flow of the work.
        </p>

        <p className="mt-6 leading-8">
         The original Hebrew text is often extremely terse and elliptical, 
         while the Greek and Syriac witnesses are often verbose and explanatory. 
         This edition seeks to capture the force of the original work in English, 
         while remaining faithful to the intent and flow of the original author.
        </p>

       </Section>

      <Section width="narrow">

        <SectionHeading>
          Why Another Translation?
        </SectionHeading>

        <p className="leading-8">
          Most English translations are based upon the Greek text of Ben Sira,  
          which is itself a translation of the original Hebrew.
          The Greek often narrows or expands upon the original work,
          obscuring the original intent of the author.
          This edition seeks to provide a more accurate
          English translation based upon the original Hebrew,
          where possible, and careful reconstruction from the Greek and Syriac
          witnesses where no Hebrew text is available.
        </p>

         
      </Section>

      <Section width="narrow">

        <SectionHeading>
          Planned Features
        </SectionHeading>

        <ul className="mt-6 list-disc space-y-3 pl-6 leading-8">
          <li>Careful English translation from the original Hebrew</li>
          <li>Reconstruction from the Greek and Syriac witnesses</li>
          <li>Occasional textual notes & commentary</li>
          <li>Easily readable page design</li>
          <li>Restoration of the original bicola verse structure</li>
        </ul>

      </Section>

      <Section width="narrow">

        <SectionHeading>
          Current Status
        </SectionHeading>

        <p className="leading-8">
          Translation and editorial work are actively
          underway. Publication details will be announced
          as the project progresses.
        </p>

      </Section>

      <Section width="narrow">

        <Link
          href="/books"
          className="inline-block rounded border border-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-white transition"
        >
          ← Back to Books
        </Link>

      </Section>

    </main>
  );
}