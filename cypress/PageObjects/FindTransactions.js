export class FindTransaction {

    static viewTransaction() {

    cy.get('a').contains('Find Transactions').click()
    cy.get('.title').should('have.text', 'Find Transactions')

    cy.get('#accountId').select('99813').should('have.value', 99813)

    cy.get("input[id='criteria.amount']").type('150')
    cy.get('.button').last().click();
    cy.get('.title').should('have.text', 'Transaction Results')

    cy.get('a[href="/parabank/transaction.htm?id=206062"]').click()
    cy.get('.title').should('have.text', 'Transaction Details')
    }
}