import Section from "./Section";
import BookCard from "./BookCard";
import SectionHeading from "./SectionHeading";

export default function FeaturedBooks() {
  return (
    <Section width="wide">
      <SectionHeading>
        Featured Publications
      </SectionHeading>

      <div className="grid gap-8
       md:grid-cols-2 lg:grid-cols-3">
        <BookCard
          title="Ben Sira"
          subtitle="A New Translation and Commentary"
          status="In Preparation"
        />

        <BookCard
          title="Scruffy Bear"
          subtitle="Faithfully restored editions"
          status="Planning"
        />

        <BookCard
          title="Children's Classics"
          subtitle="Beautiful editions for families"
          status="Future Project"
        />
      </div>
    </Section>
  );
}