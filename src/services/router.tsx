import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutCommon from "../layout/layout-common";
import LoginPage from "../pages/auth/login-page";
import RegisterPage from "../pages/auth/register-page";
import HomePage from "../pages/home/home-page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutCommon></LayoutCommon>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
