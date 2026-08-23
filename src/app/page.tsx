import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedBooks from "../components/FeaturedBooks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <Hero />
      <FeaturedBooks />
      <Footer />
    </main>
  );
}