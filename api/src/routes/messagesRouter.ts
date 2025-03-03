import { Router, Request, Response } from "express";
import SendMessageController from "../controllers/messages/SendMessage.controller";

const messagesRouter = Router();

messagesRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).send({ message: "Messages route /messages" });
});

messagesRouter.post("/:phone", async (req: Request, res: Response) => {
    return await new SendMessageController().handle(req, res);
});

export default messagesRouter;