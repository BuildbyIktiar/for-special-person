import { BrowserRouter, Routes, Route } from "react-router-dom";
import Envelope from "./components/Envelope";
import HeartScene from "./components/HeartScene";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import YesPage from "./pages/YesPage";

function HomePage() {
  return (
    <>
      <HeartScene />
      <HeroSection />
      <Envelope />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/for-special-person">
      <MusicPlayer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
