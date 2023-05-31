export class CadastroRequest {
    constructor(
        public nome?: string, 
        public sobrenome?: string, 
        public cpf?: string, 
        public email?: string, 
        public telefone?: string, 
        public salario?: number
    ) { }
}