export interface ResponseModel<T> {
  dados: T;
  mensagem: string;
  sucesso: boolean;
}
