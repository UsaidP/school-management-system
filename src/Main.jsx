import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/authLayout/login/Login.jsx";
import Register from "./Components/authLayout/register/Register.jsx";
import AuthLayout from "./Components/authLayout/AuthLayout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
