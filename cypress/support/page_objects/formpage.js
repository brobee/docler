const { constants } = require("../../support/utils/constants");

const Selectors = {
    h1Tag: 'h1',
    formInput: '#hello-input',
    formButton: '#hello-submit',
    picBox: '.jumbotron',
    companyLogo: '#dh_logo'    
}

export class FormPage {

    validateFormPageIsActive() {
        cy.get('a[id="home"]').parent('li').should('not.have.class','active')
        cy.get('#form').parent('li').should('have.class','active')
        cy.get('#error').parent('li').should('not.have.class','active')
    }
    
    validateAllElementsOnFormPage() {
        cy.get(Selectors.h1Tag).contains(constants.formH1)
        cy.get(Selectors.formInput).should('be.visible')
        cy.get(Selectors.formButton).should('be.visible')
        cy.get(Selectors.picBox).within(($jumbo) => {
            cy.get(Selectors.companyLogo).should('be.visible')
        })
    }
    formSubmit(text) {
        cy.get(Selectors.formInput).clear().type(text)
        cy.get(Selectors.formButton).click()
    }

}

export const formPage = new FormPage()