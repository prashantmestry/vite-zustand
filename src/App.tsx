import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import TopNavigation from "./component/TopNavigation";

function App() {
  return (
    <div className="container mx-auto p-4 h-screen bg-slate-200">
      <BrowserRouter>
        <TopNavigation />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
