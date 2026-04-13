import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}></Route>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
