import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticacaoRequest } from '../shared/models/autenticacao-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:8080/api/auth';
  LOCALSTORAGE_KEY = 'token';

  constructor(private http: HttpClient) { }

  login(login: AutenticacaoRequest) {
    return this.http.post('/login', { email: login.email, senha: login.senha });
  }

  logout() {
    localStorage.removeItem(this.LOCALSTORAGE_KEY);
  }

  public get isLoggedIn() {
    const token = localStorage.getItem(this.LOCALSTORAGE_KEY);
    return token ? JSON.parse(token) : null;
  }
}
