type SectionProps = {
  children: React.ReactNode;
  width?: "narrow" | "normal" | "wide";
};

export default function Section({
  children,
  width = "normal",
}: SectionProps) {

  const widths = {
    narrow: "max-w-3xl",
    normal: "max-w-5xl",
    wide: "max-w-7xl",
  };

  return (
    <section
      className={`mx-auto px-8 py-16 ${widths[width]}`}
    >
      {children}
    </section>
  );
}