import {Routes, Route} from "react-router-dom";
import Attendees from "./pages/Attendees/Attendees";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Attendees />} exact />
      <Route path="/register" element={<Register/>} exact />
    </Routes>
  );
};

export default App;