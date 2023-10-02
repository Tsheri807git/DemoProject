export class TransferFund {
    static fundTransfer(amount){
        cy.get('a[href="/parabank/transfer.htm"]').click()
        cy.get("h1[class='title']").should('have.text', 'Transfer Funds').wait(2000)

        cy.get('#amount').type(amount)

        cy.get('select[id="fromAccountId"]').select('100257').should('have.value', 100257)
        cy.get('select[id="toAccountId"]').select('101589').should('have.value', 101589)

        cy.get("input[value='Transfer']").click()
        cy.get('.title').should('have.text', 'Transfer Complete!')

        cy.get('a[href="/parabank/overview.htm"]').click()
        cy.get('.title').should('have.text', 'Accounts Overview')

        cy.get('a[href="activity.htm?id=101589"]').click()
        cy.get("table[id='transactionTable']>tbody>tr td:nth-child(4)").contains(amount).should('be.visible')

    }
}