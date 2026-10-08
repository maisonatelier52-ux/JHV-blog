import ArticleHero from "@/components/ArticleHero";

export const metadata = {
  title: "Reading the Global Markets",
  description:
    "Global markets are not one story but many, moving at different speeds.",
};

export default function Page() {
  return (
    <ArticleHero
      headingItalic="Reading the"
      headingRest="Global Markets"
      paragraphs={[
        "Global markets are not one story but many, moving at different speeds. Interest rates, currencies, commodity prices, and political events all feed into one another, and a development in one region can reshape conditions in another within days. Reading them well begins with separating signal from noise.",
        "Disciplined investors look past daily headlines to the slower forces underneath, such as inflation, productivity, demographics, and liquidity. They diversify across regions and asset classes, because no one can predict which will lead next.",
      ]}
      ctaLabel="Building a Lasting Legacy"
      ctaHref="/building-a-lasting-legacy"
    />
  );
}
