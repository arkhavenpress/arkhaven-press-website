import Section from "./Section";
import BookCard from "./BookCard";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

export default function FeaturedBooks() {
  return (
    <Section width="wide">
      <SectionHeading>
        Featured Publications
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BookCard
          title="Ben Sira"
          subtitle="A New Translation and Commentary"
          status="In Preparation"
            href="/books/ben-sira"
        />

        <BookCard
          title="Childrens Book"
          subtitle="Faithfully restored editions"
          status="Planning"
          
        />

        <BookCard
          title="In Beginning (Genesis)"
          subtitle="A careful translation with the Hebrew names rendered in English"
          status="Future Project"
      
        />
      </div>
    </Section>
  );
}