import login from "../POM/login.cy";

let repodata
describe('Influnaire', () => {
    beforeEach(() => {
        cy.fixture('userdata').then((testdata) => {
            repodata = testdata

            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        })
    })


    it('verify fields are visible ', () => {
         cy.viewport('iphone-x');
        const field = new login()
        field.chckvisiblefields()
    })


    it('verify that user is able to login with invalid credentials', () => {
        cy.viewport('samsung-s10');
        const check = new login()
        check.invalidcredentials()
    })

    it('Login with valid user ', () => {
         cy.viewport('ipad-2');
        const user = new login()
        user.logincredentials(repodata.email, repodata.password)
    })

    it.skip('verify that user is able to click on the forget password link', () => {
        const reset = new login()
        reset.resetpassword(repodata.email, repodata.newpassword, repodata.confirmnewpassword)
    })

})
