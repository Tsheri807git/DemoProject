export class ProfileUpdate {
    static editProfile(contact) {
        cy.get('a').contains('Update Contact Info').click()
        cy.get('.title').should('have.text', 'Update Profile').wait(2000)

        cy.get("input[id='customer.firstName']").clear().type(contact.firstName)
        cy.get("input[id='customer.lastName']").clear().type(contact.lastName)
        cy.get("input[id='customer.address.street']").clear().type(contact.address)
        cy.get("input[id='customer.address.city']").clear().type(contact.city)
        cy.get("input[id='customer.address.state']").clear().type(contact.state)
        cy.get("input[id='customer.address.zipCode']").clear().type(contact.zipCode)
        cy.get("input[id='customer.phoneNumber']").clear().type(contact.phone)   
        cy.get("input[value='Update Profile']").click()
        cy.get('.title').should('have.text', 'Profile Updated')
    }
}