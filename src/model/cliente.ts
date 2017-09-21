export class Cliente{
    nome: string;
    telefone1: string;
    telefone2: string;
    keyCidade: string;
    bairro: string;
    rua: string;
    num: string;


    arrumarNull(){
        if (this.telefone1 == null){
            this.telefone1 = "";
        }
        if (this.telefone2 == null){
            this.telefone2 = "";
        }
        if (this.bairro == null){
            this.bairro = "";
        }
        if (this.rua == null){
            this.rua = "";
        }
        if (this.num == null){
            this.num = "";
        }
    }
}