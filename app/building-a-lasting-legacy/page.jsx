import ArticleHero from "@/components/ArticleHero";

export const metadata = {
  title: "Building a Lasting Legacy",
  description:
    "A family legacy is more than an inheritance.",
};

export default function Page() {
  return (
    <ArticleHero
      headingItalic="Building a"
      headingRest="Lasting Legacy"
      paragraphs={[
        "A family legacy is more than an inheritance. Wealth handed down without context, purpose, or preparation rarely lasts beyond a generation or two; what endures is the understanding that travels with it. Families that last tend to talk openly about money, values, and responsibility long before any transfer takes place.",
        "Practical foundations help too: clear governance, well-drafted wills and trusts, and a shared sense of what the family is trying to sustain. Educating the next generation matters as much as the assets themselves.",
      ]}
      ctaLabel="Principles for a Lasting Future"
      ctaHref="/principles-for-a-lasting-future"
    />
  );
}
