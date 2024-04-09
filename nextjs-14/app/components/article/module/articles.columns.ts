import { GridColDef } from "@mui/x-data-grid";

export default function ArticleColumns(prop: IArticle): GridColDef[] {
  return [
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "id",
      headerName: "ID",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "title",
      headerName: "Title",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "content",
      headerName: "Content",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "registerDate",
      headerName: "RegisterDate",
    },
  ];
}
