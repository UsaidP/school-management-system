import express from "express";

const port = 3000 || process.env.PORT;
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
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Server is ready`);
});
app.get("/api/info", (req, res) => {
  res.send(info);
});
app.post("/api/info", (req, res) => {
  const user = req.body;
  info.push({
    id: user.id,
    name: user.name,
    address: user.address,
  });
  res.json({
    msg: "Rename",
  });
  console.log(user);
});

app.delete("/api/info", (req, res) => {
  info.pop();
  res.json({
    msg: "deleted",
  });
});
app.listen(port, () => {
  console.log(`serving at http://localhost:/api/${port}`);
});
