import BookCard from "./BookCard";

export default function FeaturedBooks() {
  return (
    <section className="mx-auto max-w-5xl px-8 py-16">
      <h2 className="mb-10 text-3xl font-bold">
        Featured Publications
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BookCard
          title="Ben Sira"
          subtitle="A New Translation and Commentary"
          status="In Preparation"
        />

        <BookCard
          title="Public Domain Series"
          subtitle="Faithfully restored editions"
          status="Planning"
        />

        <BookCard
          title="Children's Classics"
          subtitle="Beautiful editions for families"
          status="Future Project"
        />
      </div>
    </section>
  );
}