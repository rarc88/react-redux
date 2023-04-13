import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Keypad from "./components/keypad/Keypad";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:section" element={<Keypad />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
