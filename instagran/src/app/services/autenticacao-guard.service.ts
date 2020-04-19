import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Auth } from './auth.service'
@Injectable()
export class AutenticacaoGuard implements CanActivate {

    constructor(private autenticacao: Auth) {

    }

    canActivate(): boolean {
        return this.autenticacao.autenticado()
    }
}