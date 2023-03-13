import service from './request.js'

const url={
    login:'user/login',
    register:'user/register'
}

export class Account{
    static async Login(data){
        return service(url.login, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        }, {
            auth: {
                username: data.get('username'),
                password: data.get('password')
            }
        })
    }
    static async Register(data){
        return service(url.register, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        })
    }
}