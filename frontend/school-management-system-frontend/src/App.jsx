import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("/api/info")
      .then((res) => {
        setNames(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
