import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Routes>
          <Route path="/" element={<Rentals />} />
          <Route path="/:id" element={<SinglePage />} />
        </Routes>
        {/* <Filters /> */}
        {/* Rentals */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
