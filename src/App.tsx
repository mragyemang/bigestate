import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import Amenities from "./pages/Amenities";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
