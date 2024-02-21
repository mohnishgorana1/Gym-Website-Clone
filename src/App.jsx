import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";
import RegisterPage from "./Pages/AuthPage/RegisterPage";
import LoginPage from "./Pages/AuthPage/LoginPage";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
