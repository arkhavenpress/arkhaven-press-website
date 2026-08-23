import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-stone-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <Image
    src="/images/logom.png"
    alt="Arkhaven Press"
    width={120}
    height={43.8}
  />

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="#">Books</Link>
          <Link href="#">Research</Link>
          <Link href="/about">About</Link>
          <Link href="#">Contact</Link>
        </nav>
      </div>
    </header>
  );
}