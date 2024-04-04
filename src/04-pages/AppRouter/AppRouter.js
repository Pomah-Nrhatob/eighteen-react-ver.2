import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import { routes } from "./routes";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
}

export default AppRouter;
