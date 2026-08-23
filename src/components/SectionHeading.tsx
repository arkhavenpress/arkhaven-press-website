type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({
  children,
}: SectionHeadingProps) {
  return (
    <h2 className="mb-10 text-3xl font-bold tracking-tight text-stone-900">
      {children}
    </h2>
  );
}