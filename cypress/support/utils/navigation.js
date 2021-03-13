const homeNavbar = '#home'
const formNavbar = '#form'
const errorNavbar = '#error'

export class Navigation{

    homePage() {
        cy.get(homeNavbar).contains('Home').should('be.visible').click()
    }

    formPage() {
        cy.get(formNavbar).contains('Form').should('be.visible').click()
    }

    errorPage() {
        cy.get(errorNavbar).contains('Error').should('be.visible').click()
    }

}

export const navigateTo = new Navigation()