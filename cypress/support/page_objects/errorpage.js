const { constants } = require("../../support/utils/constants");

const Selectors = {
    h1Tag: 'h1'    
}

export class ErrorPage {
    
    validateResponseCode(responseCode) {
        const resp = parseInt(responseCode)
        cy.request({method: 'GET',url: '/error', failOnStatusCode: false}).its('status').should('eq', resp)
    }
    validateH1Tag() {
        cy.get(Selectors.h1Tag).contains(constants.errorH1)

    }

}

export const errorPage = new ErrorPage()