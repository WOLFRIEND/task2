import "./App.scss";

import { Routes, Route } from "react-router-dom";

// Pages.
import { NotFound } from "pages/NotFound";
import { Home } from "pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
