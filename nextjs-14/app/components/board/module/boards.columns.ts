import { GridColDef } from "@mui/x-data-grid";
import { IBoard } from "../model/board";

export default function BoardColumns(prop: IBoard): GridColDef[] {
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
      field: "boardName",
      headerName: "BoardName",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "boardType",
      headerName: "BoardType",
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
