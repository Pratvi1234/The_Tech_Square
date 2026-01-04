import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import HeroSection from "./componentes/HeroSection";
import CategorySection from "./componentes/Categories";
import NewsTicker from "./componentes/NewsTicker.jsx";
import Handpicked from "./componentes/HandPicked.jsx";

import Bag from "./routes/Bag.jsx";
import Profile from "./routes/Profile.jsx";
import Address from "./routes/Address.jsx";
import Payment from "./routes/Payment.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategorySection />
              <NewsTicker />
              <Handpicked />
            </>
          }
        />

        {/* Checkout Flow */}
        <Route path="/bag" element={<Bag />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
