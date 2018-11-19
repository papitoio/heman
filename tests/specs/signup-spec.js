const SignUpPage = require('../pages/signup-page')

describe('Signup', () => {

    const signup_page = new SignUpPage();
    const usersDb = require('../libs/users')

    beforeEach(()=> {
       signup_page.go()
    })
    
    it('deve exibir email não informado', () => {
        signup_page.button.click();
        expect(signup_page.alert.getText()).toEqual('Email não foi informado.')
    })

    it('deve exibir nome não informado', () => {
        signup_page.with('eu@papito.io', '', '')
        expect(signup_page.alert.getText()).toEqual('Nome não foi informado.')
    })

    it('deve exibir informe o nome completo', () => {
        signup_page.with('eu@papito.io', 'Fernando', '')
        expect(signup_page.alert.getText()).toEqual('Informe o nome completo.')
    })

    it('deve exibir senha não informada', () => {
        signup_page.with('eu@papito.io', 'Fernando Papito', '')
        expect(signup_page.alert.getText()).toEqual('Senha não informada.')
    })

    it('deve informar que não possível cadastrar com senha muito curta', () => {
        signup_page.with('eu@papito.io', 'Fernando Papito', '12345')
        expect(signup_page.alert.getText()).toEqual('Senha deve ter pelo menos 6 caracteres.')
    })

    it('deve solicitar ao usuário para aceitar os termos de uso', () => {
        signup_page.with('me@papito.io', 'Fernando Papito', 'abx123', false)
        expect(signup_page.alert.getText()).toEqual('Você precisa aceitar os termos de uso.')
    })

    describe('quando um novo usuário é cadastrado', () => {

        beforeEach(() => {
            let email = 'eu@papito.io'
            usersDb.deleteByEmail(email).then((res) => {
                console.log(res);
            })
            signup_page.with(email, 'Fernando Papito', '123456', true)
        })

        it('deve ser redicionado para a home', () => {
            container = element(by.css('.appHome'))
            expect(container.getText()).toContain('Olá, Fernando Papito')
        })
    })

    describe('quando um email já foi cadastrado', () => {

        beforeEach(() => {
            let email = 'duplicado@teste.com.br'
            usersDb.deleteByEmail(email).then((res) => {
                console.log(res);
            })
            signup_page.with(email, 'Fernando Duplicado', '123456', true)
            signup_page.go()
            signup_page.with(email, 'Fernando Duplicado', '123456', true)
        })

        it('deve informar que o mesmo já está cadastrado', () => {
            expect(signup_page.alert.getText()).toEqual('Email already exists.')
        })
    })

    afterEach(()=> {
        // browser.sleep(3000);
    })
})