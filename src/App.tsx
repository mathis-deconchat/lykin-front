import { Routes, Route } from "react-router-dom";
import Register from "./features/auth/register.page";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
