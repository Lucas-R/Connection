import { Request, Response } from "express";
import CreateCallService from "../../services/call/CreateCall.service";

class CreateCallController {
    async handle(req: Request, res: Response) {
        const { phone } = req.params;

        const call = await new CreateCallService().execute(phone);

        res.status(200).send(call);
    }
}

export default CreateCallController;