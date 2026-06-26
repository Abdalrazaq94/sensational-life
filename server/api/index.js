import { Router } from "express";
const router = Router();
import db from "../db";

import users from "./users";
import auth  from "./auth";
router.use("/users", users);
router.use("/auth", auth);

router.get("/health", (request, response) => {
    db.query("select version()")
        .then((result) => {
            response.status(200).send(result.rows[0]);
        })
        .catch((err) => {
            console.error("Health check database query failed:", err.message);
            // Return 200 even if database is unavailable
            // This allows the app to start while waiting for database connection
            response.status(200).send({ status: "ok", message: "Server is running" });
        });
});

export default router;

