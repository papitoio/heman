const SignUpPage = require('../pages/signup-page')

describe('Signup', () => {

    const signup_page = new SignUpPage();

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
        signup_page.with('me@papito.io', 'Fernando Papito', 'abx123')
        expect(signup_page.alert.getText()).toEqual('Você precisa aceitar os termos de uso.')
    })

    it('deve cadastrar um usuário com sucesso', () => {
        // Implementar
    })

    afterEach(()=> {
        browser.sleep(3000);
    })


})