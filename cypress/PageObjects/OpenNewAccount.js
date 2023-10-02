export class NewAccount {
    static openAccount() {
        cy.get('a').contains('Open New Account').click()
        cy.get('.title').should('have.text', 'Open New Account')

        cy.get('#type').select('SAVINGS')
        .should('have.value', 1)

        cy.get('#fromAccountId').select('89157').should('have.value', 89157)

        cy.get("input[value='Open New Account']").click()
        cy.get('.title').should('have.text', 'Account Opened!')

        cy.get('#newAccountId').click()
        cy.get("h1[class='title']").should('contain', 'Account Details')

    }
}