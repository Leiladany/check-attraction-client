import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation/navbar";
import { Footer } from "./components/navigation/footer";
import { HomePage } from "./pages/homepage";
import { About } from "./pages/about";
import { ThemeParks } from "./pages/themeparks";
import { ListPage } from "./pages/listpage";
import { CreateList } from "./pages/createlist";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/themeparks" element={<ThemeParks />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/createlist" element={<CreateList />} />
      </Routes>
      <Footer />
    </>
  );
};
