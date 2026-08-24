import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-stone-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <Image
    src="/images/logon.svg"
    alt="Arkhaven Press"
    width={120}
    height={63}
  />

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
         
        </nav>
      </div>
    </header>
  );
}