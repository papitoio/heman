class SignUpPage {

    // Page Factory
    constructor() {
        this.alert = element(by.css('.alert'))
        this.inputEmail = element(by.css('input[name=email]'))
        this.inputName = element(by.css('input[name=fullName]'))
        this.inputPass = element(by.css('input[name=password'))
        this.button = element(by.id('signup'))
    }

    go() {
        browser.get('http://localhost:3000/signup')
    }

    with(email, name, pass) {
        this.inputEmail.sendKeys(email)
        this.inputName.sendKeys(name)
        this.inputPass.sendKeys(pass)
        this.button.click()
    }

}

module.exports = SignUpPage;