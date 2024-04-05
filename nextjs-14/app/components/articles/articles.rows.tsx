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

  // 기본 행 및 추가 정보 행 반환
  return [
    ...(additionalRows || []), // 추가 정보 행 추가
  ];
}
