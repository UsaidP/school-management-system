import dotenv from "dotenv";
import connectDB from "./config/db.js";

import { app } from "./app.js";
import routes from "./routes/users/user.routes.js";

dotenv.config({
  path: "./.env",
});

const port = 3000 || process.env.PORT;

app.use("/api/students", routes);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoDb connection failed!!", err);
  });
