export interface LoginModel {
  auth: AuthModel[]
}

export interface AuthModel {
  id: number
  login: string
  password: string
}
