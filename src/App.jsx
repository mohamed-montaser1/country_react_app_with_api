import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { MainContent } from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/details/:countryName" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
