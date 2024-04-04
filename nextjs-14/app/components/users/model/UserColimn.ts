import { getAllArticles } from "@/redux/features/article-feature/article.slice";
import { useSelector } from "react-redux";

export default function UserRows() {
  const allArticles: [] = useSelector(getAllArticles);
  return [
    { id: 1, username: "Snow", password: "Jon", phoneNumber: 35 },
    { id: 2, username: "Lannister", password: "Cersei", phoneNumber: 42 },
    { id: 3, username: "Lannister", password: "Jaime", phoneNumber: 45 },
    { id: 4, username: "Stark", password: "Arya", phoneNumber: 16 },
    { id: 5, username: "Targaryen", password: "Daenerys", phoneNumber: "null" },
    { id: 6, username: "Melisandre", password: null, phoneNumber: 150 },
    { id: 7, username: "Clifford", password: "Ferrara", phoneNumber: 44 },
    { id: 8, username: "Frances", password: "Rossini", phoneNumber: 36 },
    { id: 9, username: "Roxie", password: "Harvey", phoneNumber: 65 },
  ];
}
