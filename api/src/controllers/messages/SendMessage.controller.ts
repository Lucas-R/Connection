import { Request, Response } from "express";
import SendMessageService from "../../services/messages/SendMessage.service";

class SendMessageController {
    async handle(req: Request, res: Response) {
        const { phone } = req.params;
        const { message } = req.body;

        const data = await new SendMessageService().execute(phone, message);
    
        res
        .set("Content-Type", "application/json")
        .status(200)
        .send(data);
    }
}

export default SendMessageController;