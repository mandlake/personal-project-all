import { GridColDef } from "@mui/x-data-grid";

export default function UserColumns(prop: UserColumns): GridColDef[] {
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
      field: "username",
      headerName: "Username",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "password",
      headerName: "Password",
      renderCell: (params) =>
        params.value ? "*".repeat(params.value.length) : "********",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "name",
      headerName: "Name",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "phoneNumber",
      headerName: "PhoneNumber",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "address",
      headerName: "Address",
    },
  ];
}
