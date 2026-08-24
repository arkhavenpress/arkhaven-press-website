
import Hero from "../components/Hero";
import FeaturedBooks from "../components/FeaturedBooks";


export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">

      <Hero />
      <FeaturedBooks />

    </main>
  );
}