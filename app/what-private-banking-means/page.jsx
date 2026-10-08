import ArticleHero from "@/components/ArticleHero";

export const metadata = {
  title: "What Private Banking Means",
  description:
    "Private banking is often described through its products: accounts, credit lines, custody, portfolio management.",
};

export default function Page() {
  return (
    <ArticleHero
      headingItalic="What Private"
      headingRest="Banking Means"
      paragraphs={[
        "Private banking is often described through its products: accounts, credit lines, custody, portfolio management. At its core, though, it is a relationship built on trust, discretion, and long-term thinking. A good private banker listens first, learning how a family earns, spends, protects, and passes on what it has before recommending a single instrument.",
        "The strongest relationships are advisory rather than transactional: clear fees, honest conversations about risk, and plans that still make sense when markets turn.",
      ]}
      ctaLabel="Reading the Global Markets"
      ctaHref="/reading-the-global-markets"
    />
  );
}
