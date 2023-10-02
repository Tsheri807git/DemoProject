import { NewAccount } from "../PageObjects/OpenNewAccount";
import { login } from "../PageObjects/LogInUser";
import { TransferFund } from "../PageObjects/FundTransfer";
import { FindTransaction } from "../PageObjects/FindTransactions";
import { ProfileUpdate } from "../PageObjects/UpdateProfile";
import { Overview } from "../PageObjects/AccountOverview";

const contact ={
    firstName:'test',
    lastName: 'data',
    address: 'fghtrd',
    city: 'jdfs',
    state: 'ajsdifsg',
    zipCode: 7487,
    phone: 34534535
}
describe('account services', () => {
    beforeEach(() => {
        cy.visit('/')
        login()
    })

    after(()=> {
        cy.get('a[href="/parabank/logout.htm"]').click()
        cy.get('h2').should('contain', 'Customer Login')
    })

    it('accounts overview', ()=> {
        Overview.accountsOverview()
    })

    it('open new account', () => {
        NewAccount.openAccount()
    })


    it('transfer funds', () => {
        TransferFund.fundTransfer(150)
    })

    it('find transaction based on amount', ()=> {
        FindTransaction.viewTransaction()
    })
    it('update conatct info', ()=> {
        ProfileUpdate.editProfile(contact)
    })

})