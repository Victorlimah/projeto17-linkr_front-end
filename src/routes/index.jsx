import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>This is a page initial</h1>} />
        </Routes>
      </BrowserRouter>
  );
}
