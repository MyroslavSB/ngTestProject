export interface User {
  email: string
  password: string,
  returnSecureToken: boolean
}

export interface newUser {
  email: string
  password: string,
}

export interface FbAuthResp {
  idToken: string,
  expiresIn: string
}

export interface Hero {
  damage: number,
  energy: number,
  hp: number,
  intelligence: number,
  name: string,
  speed: number,
  strength: number,
  // isSelected: boolean
}
