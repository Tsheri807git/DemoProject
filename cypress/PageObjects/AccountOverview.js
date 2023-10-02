export class Overview {
    static accountsOverview(){
        // cy.get('a[href="/parabank/overview.htm"]').click()
        // cy.get('.title').should('have.text', 'Accounts Overview')
        cy.get("table[id='accountTable']>tbody>tr").should('have.length', '35')

        cy.get("table[id='accountTable']>tbody>tr").each(($row) => {
            cy.wrap($row).within(()=> {
                cy.get('td').each(($col) => {
                    cy.log($col.text())
                })
            })
        })
    }
}