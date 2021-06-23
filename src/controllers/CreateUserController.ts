import { Request, Response } from "express"
import { CreateuserService } from "../services/CreateUserService";

class CreateUserController{

    async handle(request: Request, response: Response){
        const { name, email, admin } = request.body;

        const createUserservice = new CreateuserService()

        const user = await createUserservice.execute({name, email, admin})

        return response.json(user)
    }

}

export { CreateUserController }