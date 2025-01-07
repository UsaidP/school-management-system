import { Provider } from "react-redux";
import "./App.css";
import AuthLayout from "./Components/authLayout/AuthLayout";
import store from "./store/store";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";
import Home from "./Components/home/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-black h-screen">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
