import { Meteor } from 'meteor/meteor';
import './signup.html'

Template.signup_Page.onCreated(function () {
    this.alertMessage = new ReactiveVar(null);
});

Template.signup_Page.helpers({
    alertMessage() {
        return Template.instance().alertMessage.get();
    }
})

Template.signup_Page.events({
    'submit #signupForm'(event, instance) {
        event.preventDefault();

        const form = event.target;

        let user = {
            email: form.email.value,
            password: form.password.value,
            profile : {
                name: form.fullName.value,
                terms: form.terms.checked
            }
        }

        // var nome = "João da Silva"
        // nome.replace(/^\s+|\s+$/gm, '')

        // Nome não informado
        // Nome de ser completo exemplo => João da Silva // var verifica = nome.includes(' ');
        // Senha não informada

        if (user.email.length == 0) {
            instance.alertMessage.set({ value: 'Email não foi informado.', color: 'blue' });
            form.email.focus();
            return false;
        }

        if (user.password.length < 6) {
            instance.alertMessage.set({ value: 'Senha deve ter pelo menos 6 caracteres.', color: 'yellow' });
            form.password.focus();
            return false;
        }

        if (user.profile.terms == false) {
            instance.alertMessage.set({ value: 'Você precisa aceitar os termos de uso.', color: 'blue' })
            return false;
        }

        Accounts.createUser(user, function(err){
            if(err) {
                instance.alertMessage.set({
                    value: err.reason,
                    color: 'red'
                })
                return false;
            }
            instance.alertMessage.set(null);
            alert('Usuário cadastrado')
        })

    }
})