import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/sections/ArticleDetail";

// For static export
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
