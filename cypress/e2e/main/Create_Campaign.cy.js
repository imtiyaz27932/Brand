import login from "../POM/login.cy";
import campaign from "../POM/CreateCampaign.cy";



let repodata
describe('Influnaire', () => {
    beforeEach(() => {
        cy.fixture('userdata').then((testdata) => {
            repodata = testdata

            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        })
    })


    it.only('verify that steps for creating a campaign are visible and Present on left side', () => {
        const user = new login()
        const alpha = new campaign()
        user.logincredentials(repodata.email, repodata.password)
        alpha.stepcheck();
        cy.get(".ant-progress-inner").should("exist").then(($progressBar) => {
            cy.wrap($progressBar)
                .find(".ant-progress-bg")
                .should("have.css", "width", "56.4375px");
        });
    })



    it.only('Verify that user is able to create a Campaign', () => {
        const user = new login()
        const alpha = new campaign()
        user.logincredentials(repodata.email, repodata.password)
        alpha.createcampaign(repodata.campaignname, repodata.campaignbudget)
       

    })

    it('Test that leaving the fields empty give validaiton message and checks fields and text are present ', () => {
        const user = new login()
        const alpha = new campaign()
        user.logincredentials(repodata.email, repodata.password)
        alpha.validationmsgandtext()
    })



})
