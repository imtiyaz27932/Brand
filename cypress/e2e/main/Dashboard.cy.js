import dashbaord from "../POM/Dashbrd.cy";
import login from "../POM/login.cy";
import signup from "../POM/signup.cy";

let repodata
describe('Influnaire', () => {
    beforeEach(() => {
        cy.fixture('userdata').then((testdata) => {
            repodata = testdata

            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        })


    })

    it('verify dashboard modules', () => {
        //cy.viewport('iphone-x');
        const dash = new dashbaord()
        const credent = new login()
        credent.logincredentials(repodata.email, repodata.password)
        dash.validateallfieldsofdashboard(repodata.firstname)
    })

    it('check dashboard icons are visible', () => {
        const icon = new dashbaord()
        const credent = new login()
        credent.logincredentials(repodata.email, repodata.password)
        icon.validatedashboardicon()

    })
    it('verify that user is able to click on Darkmode Toggle', () => {
        const icon = new dashbaord()
        const credent = new login()
        credent.logincredentials(repodata.email, repodata.password)
        icon.darkmodetoggle()

    })

    it('verify that user is able to switch language', () => {
        const lang = new dashbaord()
        const credent = new login()
        credent.logincredentials(repodata.email, repodata.password)
        lang.languageswitch()

    })

    it('verify that user is able to Logout successfully', () => {
        const logout = new dashbaord()
        const credent = new login()
        credent.logincredentials(repodata.email, repodata.password)
        logout.logoutfromdashboard()

    })

    it(' verify user clicks already have an account link and login into the appliction', () => {
        cy.contains('Signup Now').click()
        const pepsi = new dashbaord()
        const credent = new login()
        pepsi.useraccount()
        credent.logincredentials(repodata.email, repodata.password)
    })



})

