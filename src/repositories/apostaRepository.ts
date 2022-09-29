import data from "../data/mockup.json";

export class Aposta {
  static async obtemApostas() {
    return data;
  }

  static async obtemApostaPorId(produtoId: number, apostaId: number) {
    const produto = data.find((item) => item.id === produtoId);
    console.log(produto);
    console.log(produtoId);
    console.log(apostaId);
    if (!produto) {
      throw new Error("Produto não encontrado.");
    }
    const aposta = produto.apostas.find((item) => item.id === apostaId);
    if (!aposta) {
      throw new Error("Aposta não encontrada");
    }
    return aposta;
  }
}
