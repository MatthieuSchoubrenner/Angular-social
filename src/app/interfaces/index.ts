export interface LoginUser {
  email: string;
  password: string;
}

export interface CommentObject {
  id_commentaire: number;
  contenu: string;
  id: number;
  id_article: number;
}

export interface TokenObject {
  id: number;
  email: string;
  password: string;
  token: string;
}

export interface UserObject {
  email: string;
  id: number;
  password: string;
  pseudo: string;
}

export interface ArticleObject {
  titre: string;
  id: number;
  contenu: string;
  id_article: number;
}
