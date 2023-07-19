class campaign {
    elements = {
        campaigndropdown: () => cy.contains('Campaigns'),
        campaignlist: () => cy.contains('Campaign List'),
        createcampaign: () => cy.contains('Create Campaign'),
        campaignname: () => cy.get('#name'),
        campaignbudget: () => cy.get('#totalBudget'),
        selectbrand: () => cy.get('.ant-select-selection-item'),
        datepicker: () => cy.get('.ant-picker'),
        nxtbtn1: () => cy.get('.ant-btn')

    }


    invalid = {

        invalidusermsg1: () => cy.get('.ant-form-item-explain-error').eq(0).should('have.text', 'CAMPAIGN.REQUIRED'),

    }



    
    stepcheck() {
        this.elements.campaigndropdown().click()
        this.elements.createcampaign().click()
        
              cy.get('.ant-steps-item').should('have.length', 6);
          
              // Validate the first step is active and contains the title "Campaign Basic Details"
              cy.get('.ant-steps-item-active').should('contain.text', 'Campaign Basic Details');
          
              // Validate the second step is waiting and contains the title "Campaign Brief"
              cy.get('.ant-steps-item-wait').eq(0).should('contain.text', 'Campaign Brief');
          
              // Validate the third step is waiting and contains the title "Campaign Resources"
              cy.get('.ant-steps-item-wait').eq(1).should('contain.text', 'Campaign Resources');
          
              // Validate the fourth step is waiting and contains the title "Content Requirements"
              cy.get('.ant-steps-item-wait').eq(2).should('contain.text', 'Content Requirements');
          
              // Validate the fifth step is waiting and contains the title "Audience"
              cy.get('.ant-steps-item-wait').eq(3).should('contain.text', 'Audience');
          
              // Validate the sixth step is waiting and contains the title "Finish"
              cy.get('.ant-steps-item-wait').eq(4).should('contain.text', 'Finish');
            
    }


    validationmsgandtext() {


        this.elements.campaigndropdown().click()
        this.elements.createcampaign().click()
        cy.get('.ant-form-item-control-input-content').eq(0).should('be.visible')
        cy.get('.ant-form-item-control-input-content').eq(1).should('be.visible')
        cy.get('.ant-form-item-control-input-content').eq(2).should('be.visible')
        cy.get('.ant-form-item-control-input-content').eq(3).should('be.visible')
        cy.contains('Add Cover Photo').should('be.visible');
        cy.contains('Campaign Name').should('be.visible');
        cy.contains('Select Brand').should('be.visible');
        cy.contains('Campaign Duration').should('be.visible');
        cy.contains('Campaign Budget').should('be.visible');
        cy.contains('Next').should('be.visible');
        this.elements.campaignname().click()
        this.elements.nxtbtn1().click()
        this.invalid.invalidusermsg1()

    }




    createcampaign(name, budget) {
        this.elements.campaigndropdown().should('be.visible').click()
        this.elements.campaignlist().should('be.visible')
        this.elements.createcampaign().click()
        this.elements.campaignname().type(name)
        this.elements.campaignbudget().clear().type(budget)
        // this.elements.selectbrand().click()
        cy.wait(2000)
        // cy.get('.ant-select-item ant-select-item-option').select('Puma')
    }    

    }





export default campaign;