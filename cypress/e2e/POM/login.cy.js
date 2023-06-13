// import { password } from "../../../../My Project/cypress/support/locators"

class login{
    element={
    emailaddresstxtfield:()=>  cy.get('#email'),
    passwordfield:()=>  cy.get('#password'),
    loginbtn:()=> cy.get('#basic > button'),
    influncertxt:()=> cy.get('h1.ant-typography'),
    demobtn:()=> cy.get('button.ant-btn-primary.ant-btn-dangerous'),
    checksigningoogle:()=> cy.get('button.ant-btn-default'),
    checksigninfb:()=> cy.get('button.ant-btn-primary'),
    forgetpasswordlink:()=> cy.get('.p-0'),
    signupNowlinkcheck:()=> cy.get('.flex'),
    languagetext:()=> cy.get('.ant-typography.css-dev-only-do-not-override-i9o64j'),
    logopresent:()=> cy.get('img[alt="logo"]'),
    forgetpassword:()=> cy.get('a[href="/auth/forgotpassword"]'),
    pswresetemail:()=> cy.get('.ant-input'),
    otpbtn:()=> cy.get('.ant-btn'),
    verifypswdotp:()=> cy.get('.ant-btn'),
    newpassword:()=> cy.get('input[name="password"]'),
    confirmnewpassword:()=> cy.get('input[name="confirm_password"]'),
    resetbtn:()=> cy.get('.ant-btn')
}


   invalid={
  invalidusermsg:()=>cy.get('#notistack-snackbar').should('have.text','Invalid credentials')
}

chckvisiblefields()
   {
    this.element.emailaddresstxtfield().should('be.visible')
    this.element.passwordfield().should('be.visible')
    this.element.loginbtn().should('be.visible').should('have.text','Login')
    this.element.demobtn().should('be.visible').and('have.text','Book a demo')
    this.element.influncertxt().should('be.visible').and('have.text','The trusted platform to find influencers')
    this.element.checksigningoogle().should('be.visible').and('have.text','Signin with google')
    this.element.checksigninfb().should('be.visible').and('have.text','Book a demoSignin with facebookLogin')

    this.element.forgetpasswordlink().should('be.visible').and('have.attr', 'href', '/brand/forgotpassword')
    this.element.signupNowlinkcheck().find('a').contains('Signup Now').should('be.visible')
    //this.element.languagetext().should('be.visible')
    this.element.logopresent().should('be.visible')
}
   
logincredentials(mail,password)                               // enter email address
{
    this.element.emailaddresstxtfield().type(mail)
    this.element.passwordfield().type(password)
    this.element.loginbtn().click()
    cy.wait(4000)
    
    //cy.url().should('be.eq','http://139.59.15.150:3001/app/dashboard')
}


invalidcredentials()                        // invlaid credential for login 
 {
    this.element.emailaddresstxtfield().type('tes1@gmail.com')
    this.element.passwordfield().type('test123')
    this.element.loginbtn().click()
    cy.wait(4000)
    this.invalid.invalidusermsg()
 }
   
resetpassword(mail,password,newpassword)
   {
    this.element.forgetpassword().click()
    this.element.pswresetemail().type(mail)
    this.element.otpbtn().click()
    this.element.verifypswdotp().click()
    this.element.newpassword().type(password)
    this.element.confirmnewpassword().type(newpassword)
    this.element.resetbtn().click()
    this.logincredentials(mail,password)
    
   }

}
export default login