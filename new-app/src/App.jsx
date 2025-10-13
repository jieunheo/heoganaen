import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home";
import Menu from "./Components/Menu/Menu";
import Notice from "./Components/Notice/Notice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [allMenus, setAllMenus] = useState(null);
  const [cates, setCates] = useState({});
  const [loading, setLoading] = useState(true);
  const [recoms, setRecoms] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "http://heoganaen.dothome.co.kr/api/getMenu.php"
        );
        if (!res.ok)
          throw new Error("데이터를 가져오는 중 문제가 발생했습니다.");
        const data = await res.json();

        console.log(data);

        const allMenuData = data.menus;

        setAllMenus(allMenuData);
        setLoading(false);
        setCates({
          main: [...data["cates"]["main"]],
          sub: [...data["cates"]["sub"]],
        });
        setRecoms([...data["recoms"]]);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home recoms={recoms} />} />
        <Route
          path="/menu"
          element={<Menu allMenus={allMenus} cates={cates} loading={loading} />}
        />
        <Route path="/notice" element={<Notice />} />
        <Route path="/#directions" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
