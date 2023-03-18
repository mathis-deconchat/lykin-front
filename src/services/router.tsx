import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login-page";
import RegisterPage from "../pages/auth/register-page";
import HomePage from "../pages/home/home-page";
import MultiStepForm from "../pages/auth/multi-step-page";
import React from "react";
import HomeLayout from "../layout/layout-home";
import PageLayout from "../layout/page-layout";
import ChartsPage from "../pages/charts/charts-page";
import TasksPage from "../pages/tasks/tasks-page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout></HomeLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/p" element={<PageLayout />}>
            <Route path="tasks" element={<TasksPage />}></Route>
            <Route path="charts" element={<ChartsPage />}></Route>
          </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/setup-profile" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
