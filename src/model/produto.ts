export class Produto{
    nome: string;
    valorVenda: number;
    urlImagem: string;

    arrumarNull(){
        if (this.urlImagem == null){
            this.urlImagem = "";
        }
    }

}

