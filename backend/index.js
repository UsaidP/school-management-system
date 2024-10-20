import express from "express";

const port = 3000 || process.env.PORT;
const app = express();
app.get("/", (req, res) => {
  res.send(`Server is ready`);
});
app.get("/api/info", (req, res) => {
  const info = [
    {
      id: 1,
      name: "Usaid",
      address: "Taloja",
    },
    {
      id: 2,
      name: "Uzair",
      address: "Taloja",
    },
    {
      id: 3,
      name: "Mohammad",
      address: "Taloja",
    },
  ];
  res.send(info);
});
app.listen(port, () => {
  console.log(`serving at http://localhost:/api/${port}`);
});
