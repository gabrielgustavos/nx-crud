export interface OkModel<T> {
  sucesso: boolean;
  resultado: T;
  erros: string[];
}

export interface OkModelGeneric {
  sucesso: boolean;
  erros: string[];
}

export interface OkModelList<T> {
  sucesso: boolean;
  resultado: T[];
  erros: string[];
}

export interface BadRequestModel {
  sucesso: boolean;
  erros: any;
}


export interface InternalServerErrorModel {
  resultado?: any;
  erros: any;
}

