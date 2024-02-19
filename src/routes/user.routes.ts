import { Router } from "express";

export const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/id", addUserHandler);
router.delete("/id", deleteUserHandler);
router.patch("/:id", updateUserHandler);