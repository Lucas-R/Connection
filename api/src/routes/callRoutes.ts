import { Router, Request, Response } from "express";
import CreateCallController from "../controllers/call/CreateCall.controller";

const callRouter = Router();

callRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).send({ message: "Call route /call" });
});

callRouter.post("/:phone", async (req: Request, res: Response) => {
    return await new CreateCallController().handle(req, res);
});

export default callRouter;