export class RegisterNewUser {

    
    // static genrateMail() {
    //     const randomId = Cypress._.random(1e6)
    //     return `test${randomId}.@gmail.com`
    // }

    static registerUser(user) {
        cy.get('a').contains('Register').click()
        cy.get('.title').should('have.text', 'Signing up is easy!')

        cy.get("input[id='customer.firstName']").type(user.firstName)
        cy.get("input[id='customer.lastName']").type(user.lastName)
        cy.get("input[id='customer.address.street']").type(user.address)
        cy.get("input[id='customer.address.city']").type(user.city)
        cy.get("input[id='customer.address.state']").type(user.state)
        cy.get("input[id='customer.address.zipCode']").type(user.zipCode)
        cy.get("input[id='customer.phoneNumber']").type(user.phone)
        cy.get("input[id='customer.ssn']").type(user.ssn)
        cy.get("input[id='customer.username']").type(user.userName)
        cy.get("input[id='customer.password']").type(user.password)
        cy.get("input[id='repeatedPassword']").type(user.confirm)
         
    }

    static successfulRegistration() {
        cy.get("input[value='Register']").click()   
        cy.get('.title').should('contain', 'Welcome')
    }

    static existingUser() {
        cy.get("input[value='Register']").click()  
        cy.get("span[id='customer.username.errors']").contains('This username already exists.').should('be.visible')
    }

    static passwMissMatch() {
        cy.get("input[value='Register']").click()
        cy.get("span[id='repeatedPassword.errors']").contains('Passwords did not match.').should('be.visible')
    }

    static logOut() {
        cy.get('a[href="/parabank/logout.htm"]').click()
        cy.get('h2').should('have.text', 'Customer Login')
    }

    static emptyField() {
        cy.get('a').contains('Register').click()
        cy.get('.title').should('have.text', 'Signing up is easy!')

        cy.get("input[value='Register']").click()

        const id = ["span[id='customer.firstName.errors']", "span[id='customer.lastName.errors']", "span[id='customer.address.street.errors']", "span[id='customer.address.city.errors']", "span[id='customer.address.state.errors']", "span[id='customer.address.zipCode.errors']", "span[id='customer.ssn.errors']", "span[id='customer.username.errors']", "span[id='customer.password.errors']", "span[id='repeatedPassword.errors']"]

        const message = ['First name is required.', 'Last name is required.', 'Address is required.', 'City is required.', 'State is required.', 'Zip Code is required.', 'Social Security Number is required.', 'Username is required.', 'Password is required.', 'Password confirmation is required.']

        for(let i in id) {
            cy.get(id[i]).contains(message[i]).should('be.visible')
        }
    }
}
