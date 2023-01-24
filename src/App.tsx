import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShopCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <div>
      <ShopCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/store" element={<Store />}>
              {" "}
            </Route>
            <Route path="/about" element={<About />}>
              {" "}
            </Route>
          </Routes>
        </Container>
      </ShopCartProvider>
    </div>
  );
}

export default App;
