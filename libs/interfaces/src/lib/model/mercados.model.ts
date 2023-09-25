export interface MercadosModel {
  id: number;
  nome: string;
  avaliacao: number; // Corrigido para number
  categoria: string;
  distancia: string;
  prazoEntrega: string;
  frete: string;
  imagem: string;
  produtos: ProdutoModel[]; // Adicionei a definição da propriedade produtos
}

export interface ProdutoModel {
  id: number;
  nome: string;
  categoria: string;
  preco: string; // Pode ser necessário ajustar para o tipo correto (por exemplo, number)
  imagem: string;
}
