import React from "react";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Alternatives from "./pages/Alternatives";
import Pourquoi from "./pages/Pourquoi";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />

        {/* Route pour la page alternatives */}
        <Route path="/alternatives" element={<Alternatives />} />

        {/* Route pour la page pourquoi */}
        <Route path="/pourquoi" element={<Pourquoi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
