import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home";
import Menu from "./Components/Menu/Menu";
import Notice from "./Components/Notice/Notice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/#directions" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
