import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  setTokenUsers(token: any) {
    localStorage.setItem('idUsuario', token.id_usuario);
    localStorage.setItem('correoUsuario', token.email);
    localStorage.setItem('Token', token.token);
  }
  //LOGIN EXTERNO
  setTokenUsersAuthExtern(token: any) {
    localStorage.setItem('idUsuario', token.id_usuario);
    localStorage.setItem('correoUsuario', token.Email);
    localStorage.setItem('Token', token.Token);
  }
  getTokenId() {
    return localStorage.getItem('idUsuario');
  }
  getTokenEmail() {
    return localStorage.getItem('correoUsuario');
  }
  getToken() {
    return localStorage.getItem('Token');
  }
  //ELIMINO TODA LA SESION DEL USUARIO
  removeToken() {
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('correoUsuario');
    localStorage.removeItem('Token');
    localStorage.removeItem('dataUsuarioItems');
  }
}
