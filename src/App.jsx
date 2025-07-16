import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddBucket from "./components/AddBucket";
import BucketPage from "./pages/BucketPage";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="bucket" element={<BucketPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
