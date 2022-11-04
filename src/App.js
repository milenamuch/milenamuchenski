import { Button, ButtonBase } from "@mui/material";
import "./App.scss";
import FetchNews from "./components/FetchNews";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: "2rem" }}>{<FetchNews />}</div>
      </header>
    </div>
  );
}

export default App;
