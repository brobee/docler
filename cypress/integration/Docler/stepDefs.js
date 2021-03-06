const { formPage } = require("../../support/page_objects/formpage");
const { homePage } = require("../../support/page_objects/homepage");
const { helloPage } = require("../../support/page_objects/hellopage");
const { errorPage } = require("../../support/page_objects/errorpage");
const { navigateTo } = require("../../support/utils/navigation");
const { helpers } = require("../../support/utils/helpers");

beforeEach(function(){
    cy.fixture('example').then(() => {

    })
})

Given('I am on the Homepage', () => {
    cy.visit("/")
});
Given('I am on the Form Page', () => {
    cy.visit("/form.html")
});

When('I navigate to the Form page', () => {
    navigateTo.formPage()
})

And('I navigate to the Homepage', () => {
    navigateTo.homePage()
})

Then('Title is {string}', (titleText) => {
    helpers.validateTitle(titleText)
})

Then('The Company Logo appears on the page', () => {
    helpers.validateCompanyLogo()
})

Then('Home page is displayed', () => {
    homePage.isLoaded()
})

Then('Home button turns to active status', () => {
    homePage.validateHomeIsActive()
})

Then('Form page is displayed',() => {
    formPage.isLoaded()
})

Then('Form button turns to active status',() => {
    formPage.validateFormIsActive()
})

Then('I get {string} HTTP response code', (responseCode) => {
    errorPage.validateResponseCode(responseCode)
    //UI check
    errorPage.validateH1Tag()
})


When('I click on the UI Testing logo', () => {
    cy.get('#site').contains('UI Testing').click()
})

Then('I am navigated to the Home Page', () => {
    homePage.isLoaded()
})

Then('All mandatory elements are visible on the Homepage', () => {
    homePage.validateAllElementsOnHomepage()
    //I validate all the elements in one shot, not only h1. If you want to validate only h1 tag. please use the method below:
    //homePage.validateH1Tag()
});

Given('I navigate to the Form Page', () => {
    navigateTo.formPage()
});

Then('All mandatory elements are visible on the Form page', () => {
    formPage.validateAllElementsOnFormPage()
})
When('I navigate to the Error Page', () => {
    navigateTo.errorPage();
});


When('I type in these values and submit the form', (dataTable) => {
    var propValue;
    dataTable.hashes().forEach(elem =>{
      for(var propName in elem) {
        propValue = elem[propName]
        cy.log(propName,propValue);
    }
    });

    dataTable.hashes().forEach(elem => {
        formPage.formSubmit(elem.value);
        helloPage.verifyHelloText(elem.result);
        cy.go('back');
})
})

Then('I am redirected to the Hello Page and proper message appears', () => {
    //See when step. 
})