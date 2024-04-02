import { getAllArticles } from "@/redux/features/article-feature/article.slice";
import { useSelector } from "react-redux";

export default function ArticleRows() {
  const allArticles: [] = useSelector(getAllArticles);
  return [];
}
