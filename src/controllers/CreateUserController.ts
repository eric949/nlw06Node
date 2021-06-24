import { Request, Response } from "express"
import { CreateuserService } from "../services/CreateUserService";
import { hash } from "bcryptjs"

class CreateUserController{

    async handle(request: Request, response: Response){
        const { name, email, admin, password } = request.body;

        const createUserservice = new CreateuserService()

        const passwordHash = await hash(password, 8)

        const user = await createUserservice.execute({name, email, admin, password: passwordHash})

        return response.json(user)
    }

}

export { CreateUserController }