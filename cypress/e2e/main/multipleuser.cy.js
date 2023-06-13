import { password } from "../../../../My Project/cypress/support/locators"
import { confirmpassword } from "../../support/locatorfile"
import signup from "../POM/signup.cy"
import login from "../POM/login.cy"
import dashbaord from "../POM/Dashbrd.cy"

const credential = new login()
const logout = new dashbaord()
let repodata
describe('signup with multiple users', () => {
  beforeEach(() => {
    cy.fixture('userdata').then((testdata) => {
      repodata = testdata

      cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
    })
  })

  it('Sign Up with user 1 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw10980@gmail.com")
    login.verifysignupfield()
    login.usercredentialssignup("imtiyaz", "ahmad", "STC", "Manager", "9906411207")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw10980@gmail.com", repodata.password)
    cy.wait(4000)
  })


  it('Sign Up with user 2 and then Login', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw200980@gmail.com")
    login.verifysignupfield()
    login.usercredentialssignup("Aquib", "Bashir", "Iqusar", "Manager", "9906411200")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw200980@gmail.com", repodata.password)
    cy.wait(4000)
  })

  it('Sign Up with user 3 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw300980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw300980@gmail.com.com", repodata.password)
  })


  it('Sign Up with user 4 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw040980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw040980@gmail.com.com", repodata.password)
  })

  it('Sign Up with user 5 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw500980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw500980@gmail.com.com", repodata.password)
  })

  it('Sign Up with user 6 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw600980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw600980@gmail.com.com", repodata.password)
  })

  it('Sign Up with user 7 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw700980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw700980@gmail.com.com", repodata.password)
  })

  it('Sign Up with user 8 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw800980@gmail.com.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw800980@gmail.com", repodata.password)
  })


  it('Sign Up with user 9 and then Login', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw900980@gmail.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw900980@gmail.com", repodata.password)
  })

  it('Sign Up with user 10 and then Login ', () => {
    cy.contains('Signup Now').click()
    const login = new signup()
    login.enteremailaddress("gw1000890@gmail.com")
    login.verifysignupfield()
    login.usercredentialssignup("abdul", "Bari", "Lelafee", "Manager", "9906411290")
    login.enterpassword(repodata.password, repodata.confirmpassword)
    logout.logoutfromdashboard()
    credential.logincredentials("gw1000890@gmail.com", repodata.password)
  })

})