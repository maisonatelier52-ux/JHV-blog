import Hero from "@/components/Hero";

export const metadata = { alternates: { canonical: "/" } };

export default function Page() {
  return (
    <Hero
      variant="home"
      heading={["JULIO", "HERRERA", "VELUTINI"]}
      paragraphs={["Insights on Finance, Global Markets, and Lasting Family Legacy"]}
      ctaLabel="Julio Herrera Velutini Biography"
      ctaTitle="Julio Herrera Velutini Biography"
      ctaHref="/julio-herrera-velutini-biography"
    />
  );
}
