const { constants } = require("../../support/utils/constants");

const Selectors = {
    h1Tag: 'h1',
    pText: '.lead',
    picBox: '.jumbotron',
    companyLogo: '#dh_logo',
    navbarLogo: '#site',
    navbarContainer: '.navbar-nav',
    navbarHome: 'a[id="home"]',
    navbarForm: '#form',
    navbarError: '#error',
}

const navbarLenght = 3;

export class HomePage {

    validateHomePageIsActive() {
        cy.get('a[id="home"]').parent('li').should('have.class','active')
        cy.get('#form').parent('li').should('not.have.class','active')
        cy.get('#error').parent('li').should('not.have.class','active')
    }

    isLoaded() {
        cy.title().should('eq','UI Testing Site')
        cy.get('#navbar').should('be.visible')
        cy.get('.ui-test').should('be.visible')
        cy.get('.lead').should('be.visible')
        cy.get('.jumbotron').should('be.visible')
    }

    validateAllElementsOnHomepage() {
        cy.get(Selectors.navbarLogo).should('be.visible')
        cy.get(Selectors.navbarContainer).find('li').should('have.length', navbarLenght)
        cy.get(Selectors.navbarHome).parent('li').should('have.class','active')
        cy.get(Selectors.navbarForm).parent('li').should('not.have.class','active')
        cy.get(Selectors.navbarError).parent('li').should('not.have.class','active')
        cy.get(Selectors.h1Tag).contains(constants.homePageH1)
        cy.get(Selectors.pText).contains(constants.homePagePText)
        cy.get(Selectors.picBox).within(($jumbo) => {
            cy.get(Selectors.companyLogo).should('be.visible')
        })

    }
}

export const homePage = new HomePage()