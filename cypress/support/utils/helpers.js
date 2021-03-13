const picBox = '.jumbotron'
const companyLogo = '#dh_logo'

export class Helpers {
    validateTitle(title) {
        cy.title().should('eq',title)
    }

    validateCompanyLogo() {
        cy.get(picBox).within(($jumbo) => {
            cy.get(companyLogo).should('be.visible')
        })
    }
}

export const helpers = new Helpers()