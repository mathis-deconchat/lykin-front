import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutCommon from "../layout/layout-common";
import LoginPage from "../pages/auth/login-page";
import RegisterPage from "../pages/auth/register-page";
import HomePage from "../pages/home/home-page";
import MultiStepForm from "../pages/auth/multi-step-page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutCommon></LayoutCommon>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/setup-profile" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
