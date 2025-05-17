import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";

// Import your new MenuPage component
import MenuPage from "./Pages/MenuPage";  // <-- make sure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />   {/* Add this line */}
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
