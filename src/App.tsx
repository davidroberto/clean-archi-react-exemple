import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderPage from "./order/presentation/page/CreateOrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-order" element={<CreateOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
