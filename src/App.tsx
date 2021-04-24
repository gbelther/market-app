import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import "./styles/global.scss";

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
