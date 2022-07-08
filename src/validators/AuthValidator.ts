import { checkSchema } from "express-validator";

const AuthValidator = {
    signup: checkSchema({
            username: {
                isLength: {
                    options: { min: 4 }
                },
                errorMessage: "Nome precisa ter pelo menos 4 caracteres."
            },
            password: {
                isStrongPassword: {
                    options: { minLength: 5, minUppercase: 1, minLowercase: 1, minNumbers: 1, minSymbols: 1 }
                },
                errorMessage: "Senha não é forte o suficiente."
            },
            email: {
                isEmail: true,
                normalizeEmail: true,
                notEmpty: true,
                errorMessage: "Email inválido."
            },
            phone_number: {
                isMobilePhone: { options: "pt-BR" },
                notEmpty: true,
                errorMessage: "Número de telefone inválido"
            }
        })
}

export default AuthValidator;