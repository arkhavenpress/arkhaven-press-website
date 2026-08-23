export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-300 py-10 text-center text-sm text-stone-500">
      © {new Date().getFullYear()} Arkhaven Press
    </footer>
  );
}