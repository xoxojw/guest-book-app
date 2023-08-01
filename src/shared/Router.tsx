import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthMain from "../pages/AuthMain";
import Main from "../pages/Main";
import AuthLayout from "./AuthLayout";
import NonAuthLayout from "./NonAuthLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonAuthLayout />}>
          <Route path="/auth" element={<AuthMain />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
