import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login-page/login-page";
import RegisterPage from "../pages/auth/register-page";
import HomePage from "../pages/home/home-page";
import MultiStepPage from "../pages/auth/multi-step-page";
import React from "react";
import HomeLayout from "../layout/layout-home";
import PageLayout from "../layout/page-layout";
import ChartsPage from "../pages/charts/charts-page";
import TasksPage from "../pages/tasks/tasks-page";
import MultiStepForm from "../components/auth/forms/auth/multi-step-form-register/multi-step-form";
import { ProvideMutliStepForm } from "../contexts/mutli-step-fom-context";
import AuthWrapper from "../pages/auth/private-route/require-auth";
import Carla from "../pages/carla";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route element={<AuthWrapper />} >
        <Route element={<HomeLayout></HomeLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/p" element={<PageLayout />}>
          <Route path="tasks" element={<TasksPage />}></Route>
          <Route path="charts" element={<ChartsPage />}></Route>
        </Route>
        </Route>
        <Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/setup-profile"
            element={
              <ProvideMutliStepForm>
                <MultiStepPage />
              </ProvideMutliStepForm>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
