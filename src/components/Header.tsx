export default function Header() {
  return (
    <header className="border-b border-stone-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Arkhaven Press
        </h1>

        <nav className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">Research</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}