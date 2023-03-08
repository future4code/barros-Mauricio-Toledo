import { CustomError } from "./CustomErros"


export class MissingUserId extends CustomError {
    constructor () {
        super(422, "Falta o id do usuario .")
    }
}

export class UserIdNotFound extends CustomError {
    constructor () {
        super(404, "id não encontrado.")
    }
}

export class MissingRole extends CustomError {
    constructor () {
        super(422, "Falta o role.")
    }
}

export class Unauthorized extends CustomError {
    constructor () {
        super(401, "Não autorizado.")
    }
}