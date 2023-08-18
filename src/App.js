import "./App.css";
import { Route, Routes } from "react-router-dom";
import Bmi from "./components/Bmi";
import Diet from "./components/Diet";
import Entertainment from "./components/Entertainment";
import Header from "./components/Header";
import Home from "./components/Home";
import Yoga from "./components/Yoga";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/entertainment" element={<Entertainment />} />
        <Route exact path="/diet" element={<Diet />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/bmi" element={<Bmi />} />
      </Routes>
    </>
  );
}

export default App;
