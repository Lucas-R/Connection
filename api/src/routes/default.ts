import { Request, Response, Router } from "express";

const defaultRoutes = Router();

defaultRoutes.get("/", async (req: Request, res: Response) => {
    res
    .status(200)
    .set("Content-Type", "application/json")
    .send({ data: "Wellcome to API connect..." });
});

export default defaultRoutes;