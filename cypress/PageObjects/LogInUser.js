export class LoginUser {

    static userLogin(user) {
        cy.get("input[name='username']").type(user.userName)
        cy.get("input[name='password']").type(user.password) 
    }

    static successfulLogin(){
        cy.get("input[value='Log In']").click()
        cy.get('.title').should('have.text', 'Accounts Overview')
    }

    static invalidLogin() {
        cy.get("input[value='Log In']").click()
        cy.get('.error').contains('Please enter a username and password.').should('be.visible')
    }

    static invalidUserName() {
        cy.get("input[value='Log In']").click()
        cy.get('.error').contains('The username and password could not be verified.').should('be.visible')
    }

}

export function login() {
    cy.get("input[name='username']").type('qwert')
    cy.get("input[name='password']").type('12345') 
    cy.get("input[value='Log In']").click()
}