import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<> No page </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
