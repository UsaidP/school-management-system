import { Router } from "express";

const router = Router();

router.route("/", (req, res) => {
  res.send("Hello");
});


export router