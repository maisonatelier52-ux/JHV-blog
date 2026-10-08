import ArticleHero from "@/components/ArticleHero";

export const metadata = {
  title: "Principles for a Lasting Future",
  description:
    "Lasting financial futures are rarely built on brilliance; they are built on habits.",
};

export default function Page() {
  return (
    <ArticleHero
      headingItalic="Principles for"
      headingRest="a Lasting Future"
      paragraphs={[
        "Lasting financial futures are rarely built on brilliance; they are built on habits. Spend less than you earn, keep liquidity for the unexpected, diversify, keep costs low, and let compounding work across decades rather than quarters. These ideas are simple, which is precisely why they are so often neglected.",
        "Just as important is the discipline of learning: reading widely, questioning assumptions, and taking advice from people whose incentives are aligned with yours. A well-informed mind makes calmer decisions, especially under pressure.",
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
