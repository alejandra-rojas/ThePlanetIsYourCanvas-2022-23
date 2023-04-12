import { BrowserRouter, Route, Routes } from "react-router-dom";
import En from "./En";
import Es from "./Es";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<En />} />
          <Route path="/es" element={<Es />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
