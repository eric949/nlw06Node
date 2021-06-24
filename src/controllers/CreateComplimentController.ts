import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController{
    async handle(request: Request, response:Response){
        const {user_sender, user_receiver, tag_id, message} = request.body

        const createComplimentSerive = new CreateComplimentService();

        const compliment = await createComplimentSerive.execute({user_sender, user_receiver, tag_id, message})

        return response.json(compliment)
    }
}

export { CreateComplimentController }