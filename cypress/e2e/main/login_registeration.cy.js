import signup from "../POM/signup.cy"
import login from "../POM/login.cy"
let repodata
describe('Influnaire', () => {
  beforeEach(() => {
    cy.fixture('userdata').then((testdata) => {
      repodata = testdata
      cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
    })
  })


  it('Lets get started with Signup Now ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress(repodata.email)
    login.verifysignupfield()
  })

  it('verify that if user is able to signup without email address', () => {
    cy.contains('Signup Now').click()
    const withoutemail = new signup()
    withoutemail.Sigupwithouteamiladdress()
  })

  it('signup with valid credentials', () => {
    cy.contains('Signup Now').click()
    const name = new signup()
    name.Sigupwitheamiladdress(repodata.email)
    name.usercredentialssignup(repodata.firstname, repodata.Lastname, repodata.companyname, repodata.Title, repodata.PhoneNumber)
    //name.enterotp()
    name.enterpassword(repodata.password, repodata.confirmpassword)
  })

  it.skip('Test that user is able to signup using facebook', () => {
   
    cy.contains('Signup Now').click()
    const name = new signup()
    name.signupWithFB('imu27932@gmail.com','Test@123')
    

  })
})
    





