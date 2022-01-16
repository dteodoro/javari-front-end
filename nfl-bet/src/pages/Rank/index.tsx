import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", hide: true },
  { field: "rank", headerName: "Rank", width: 60 },
  { field: "player", headerName: "", width: 250 },
  { field: "total", headerName: "Total", width: 100 },
];

const rows = [
  { id: 1, rank: 1, player: "Dário", total: 40 },
  { id: 2, rank: 2, player: "Johnny", total: 30 },
  { id: 3, rank: 3, player: "Diego", total: 20 },
  { id: 4, rank: 4, palyer: "Leandro", total: 10 },
];

const Rank = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Rank;
