import { getAllArticles } from "@/redux/features/article-feature/article.slice";
import { useSelector } from "react-redux";

export default function ArticleRows() {
  const allArticles: [] = useSelector(getAllArticles);
  const additionalRows = allArticles?.map((article: IArticle) => ({
    id: article.id,
    title: article.title,
    content: article.content,
    writer: article.writer,
    registerDate: article.registerDate,
  }));

  return [...(additionalRows || [])];
}
