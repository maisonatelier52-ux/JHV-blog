import ArticleHero from "@/components/ArticleHero";

const SLUG = "/julio-herrera-velutini-biography";
const TITLE = "Julio Herrera Velutini Biography: Banker and Family Legacy";
const DESCRIPTION =
  "Read the biography of Julio Herrera Velutini, an Italian-Venezuelan banker and entrepreneur from a family with deep roots in Latin American banking, and explore his work in private banking and international finance.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Julio Herrera Velutini",
    "Julio Herrera Velutini biography",
    "Julio Herrera Velutini banker",
    "Herrera Velutini family",
    "private banking",
    "international finance",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: SLUG,
    siteName: "Julio Herrera Velutini",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `https://www.hvelutini.com${SLUG}`,
  name: TITLE,
  description: DESCRIPTION,
  mainEntity: {
    "@type": "Person",
    name: "Julio Herrera Velutini",
    jobTitle: "Banker and entrepreneur",
    url: "https://www.hvelutini.com",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleHero
        headingItalic="Julio Herrera"
        headingRest="Velutini Biography"
        paragraphs={[
          "Julio Herrera Velutini is an Italian-Venezuelan banker and entrepreneur from a family with deep roots in Latin American banking. This biography covers his background, his work in private banking and international finance, and the family history behind it.",
          "From a banking heritage that spans generations to a career across Europe and the Americas, it offers a clear introduction to the banker behind the name, with more on private banking, global markets, and legacy planning in the articles that follow.",
        ]}
        ctaLabel="What Private Banking Means"
        ctaHref="/what-private-banking-means"
      />
    </>
  );
}
