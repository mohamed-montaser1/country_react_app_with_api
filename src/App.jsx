import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { MainContent } from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    // <div>
    //   <Header />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<MainContent />} />
    //       <Route path="/details" element={<Details />} />
    //     </Routes>
    //   </div>
    // </div>
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
