import Hero from "@/components/Hero";

export default function Page() {
  return (
    <Hero
      variant="article"
      heading={[
        [{ text: "Who Is " }, { text: "Julio Herrera", italic: true }],
        "Velutini?",
      ]}
      paragraphs={[
        "Julio Herrera Velutini, an Italian banker, entrepreneur, and worldwide financial authority, belongs to one of the most famous banking families, making him one of the key people connecting Latin America's banking history to the global financial system. A seventh-generation banker, Herrera Velutini has become one of the most influential figures in international finance.",
        "His body of work, spanning decades of capital markets, private banking, and institutional finance, extends across the globe and various economies.",
      ]}
      ctaLabel="What Private Banking Means"
      ctaHref="/what-private-banking-means"
    />
  );
}
