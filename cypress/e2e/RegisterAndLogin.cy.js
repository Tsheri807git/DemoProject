import { RegisterNewUser } from "../PageObjects/RegisterNewUser";
import { LoginUser } from "../PageObjects/LogInUser";
import {
  randUserName
} from '@ngneat/falso';

const user = 
{
  firstName:'test1',
  lastName:'data',
  address:'babesa',
  city:'thimphu',
  state:'thimthrom',
  zipCode:1234,
  phone:123456,
  ssn:2334,
  userName:randUserName(),
  password:'testdata@123',
  confirm:'testdata@123'
}
describe("registration", () => {
 before(() => {
  cy.visit('/')
  // cy.url().should('include', 'parabank')
 })
  
  it('Test for form validation', () => {
    RegisterNewUser.emptyField()
  })

  it('unsuccessful registration with existing username-negtive case', () => {
    RegisterNewUser.registerUser({...user, userName: 'testusername'})
    RegisterNewUser.existingUser()
  })

  it('unsuccessful registration with mismatch password-negative case', () => {
    RegisterNewUser.registerUser({...user, confirm: 'test'})
    RegisterNewUser.passwMissMatch()

  })

  it('successful Registration of new user-positive case', () => {
    RegisterNewUser.registerUser(user)
    RegisterNewUser.successfulRegistration()
  })

  it('Test for form validation-login', () => {
    RegisterNewUser.logOut()
    LoginUser.invalidLogin()
   })

   it('Login with unregisrered username', () => {
    LoginUser.userLogin({...user, userName: 'erfgthgrfd', password: 'fgffgdfgf'})
    LoginUser.invalidUserName()
  })

   it('successful Login', () => {
    LoginUser.userLogin(user)   
    LoginUser.successfulLogin()
  })
   

})  