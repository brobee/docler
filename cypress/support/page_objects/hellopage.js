const { constants } = require("../../support/utils/constants");

const Selectors = {
    h1Tag: '#hello-text',
    h1Box: '.ui-test',
    picBox: '.jumbotron',
    companyLogo: '#dh_logo'
}


export class HelloPage {
    verifyHelloText(result) {
        return cy.get(Selectors.h1Tag).parent(Selectors.h1Box).contains(result)
        //.should('eq',result)
    }
}

export const helloPage = new HelloPage()