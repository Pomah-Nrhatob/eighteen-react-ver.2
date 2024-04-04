import { BrowserRouter } from "react-router-dom";
import AppRouter from "./04-pages/AppRouter/AppRouter";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
