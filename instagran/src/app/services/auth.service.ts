import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Usuario } from '../acesso/models';
import * as firebase from 'firebase/app'

@Injectable()
export class Auth {
    //token jwt
    public tokenId: String
    constructor(private router: Router) { }

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                //remove a senha do atrivuto senha do objeto susario
                // delete usuario.senha
                //registrando dados do usuario do path email na base 64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .then((res: any) => {
                this.autenticar(usuario.email, usuario.senha)
            })
            .catch((erro: Error) => {
                console.log(erro)
            })
    }
    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((res: any) =>
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.tokenId = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            )
            .catch((error: Error) => console.log(error))
    }
    public autenticado(): boolean {

        if (this.tokenId === undefined && localStorage.getItem('idToken') !== null) {
            this.tokenId = localStorage.getItem('idToken')
        }
        if(this.tokenId === undefined){
            this.router.navigate(['/'])
        }
        return this.tokenId !== undefined
    }
    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
            })
        this.tokenId = undefined
        this.router.navigate(['/'])
    }
}