import { Router, Request, Response } from "express";

const helloRouter = Router();


//Define route paths

helloRouter.get("/", (req: Request, res: Response)=> {
    // return {data: "Server is Live!!!!!"};
    res.json({"data": "Server is Live!!!", "aa": "Hello ji"})
});

export default helloRouter;