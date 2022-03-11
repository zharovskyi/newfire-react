import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.scss";

const rows = [
  {
    id: 1,
    col1: "Silver Dollar Porter",
    col2: "Американский Портер",
    col3: "6.2 %",
    col4: "38.4",
    col5: "20 л",
  },
  {
    id: 2,
    col1: "Young’s Special London Ale clone",
    col2: "Стронг Біттер",
    col3: "5.2 %",
    col4: "30.1",
    col5: "20.5 л",
  },
  {
    id: 3,
    col1: "From Lviv",
    col2: "Світлий лагер",
    col3: "9.1 %",
    col4: "20.9",
    col5: "20 л",
  },
];

const columns = [
  { field: "col1", headerName: "Назва рецепту", width: 150 },
  { field: "col2", headerName: "Тип пива", width: 150 },
  { field: "col3", headerName: "Вміст алкоголю", width: 150 },
  { field: "col4", headerName: "Гіркота", width: 150 },
  { field: "col5", headerName: "Вихідний об'єм", width: 150 },
];
const theme = createTheme({
  status: {
    danger: red[500],
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ height: 300, width: "50%" }}>
        <DataGrid rows={rows} columns={columns} />
        <Button variant="text">Text</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
