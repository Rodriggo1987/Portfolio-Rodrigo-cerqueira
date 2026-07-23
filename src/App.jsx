import "./global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Hero/Hero";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projetos from "./pages/Projeto/Projetos.jsx";
import Contato from "./pages/Contato/Contato.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}