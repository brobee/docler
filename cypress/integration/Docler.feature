Feature: Docler POC

As a Tester, in order to make sure the website works properly, I want to run all automation scripts.

    @REQ-UI-01 @moderate
    Scenario: The Title should be "UI Testing Site" on every page
        Given I am on the Homepage
        When I navigate to the Form page
        Then Title is "UI Testing Site"
        And I navigate to the Homepage
        Then Title is "UI Testing Site"
    
    @REQ-UI-02 @moderate
    Scenario: The Company Logo should be visible on every page
        Given I am on the Homepage
        When I navigate to the Form page
        Then The Company Logo appears on the page
        And I navigate to the Homepage
        Then The Company Logo appears on the page
    
    @REQ-UI-03  @high
    Scenario: When I click on the Home button, I should get navigated to the Home page
        Given I am on the Form Page
        When I navigate to the Homepage
        Then Home page is displayed

    @REQ-UI-04 @low
    Scenario: When I click on the Home button, it should turn to active status
        Given I am on the Form Page
        When I navigate to the Homepage
        Then Home button turns to active status
    
    @REQ-UI-05 @high
    Scenario: When I click on the Form button, I should get navigated to the Form page
        Given I am on the Homepage
        When I navigate to the Form page
        Then Form page is displayed
    
    @REQ-UI-06 @low
    Scenario: When I click on the Form button, it should turn to active status
        Given I am on the Homepage
        When I navigate to the Form page
        Then Form button turns to active status

    @REQ-UI-07 @high
    Scenario: Whem I click on the Error button, I should get 404 HTTP response code
        Given I am on the Homepage
        When I navigate to the Error Page
        Then I get "404" HTTP response code
    
    @REQ-UI¬08 @high
    Scenario: Whem I click on the UI Testing button, I should get navigated to the Home page
        Given I am on the Form Page
        When I click on the UI Testing logo
        Then Home page is displayed

    @REQ-UI-09 @low
    Scenario: Welcome to the Docler Holding QA Department H1 tag should be displayed on Home page
        Given I am on the Homepage
        When Home page is displayed
        Then All mandatory elements are visible on the Homepage
        #Please note, I validate all the homepage elements, not only h1. If you want validat only h1, please use validateH1Tag method in the stepDef file.
    
    @REQ-UI-10 @low
    Scenario: This site is dedicated to perform some exercises p tag should be displayed on Home page
        Given I am on the Homepage
        When Home page is displayed
        Then All mandatory elements are visible on the Homepage
        #Please note, I validate all the homepage elements, not only p tag. If you want validat only p tag, please use validatePTag method in the stepDef file.

    @REQ-UI-11 @high
    Scenario: On the Form page, a form should be visible with one input box and one submit button
        Given I am on the Homepage
        When I navigate to the Form Page
        Then All mandatory elements are visible on the Form page

    @REQ-UI-12 @high
    Scenario: Multiple form submit with different values - Hello page validation
        Given I am on the Form Page
        When I type in these values and submit the form
            | value   |     result     |
            | John    | Hello John!    |
            | Sophia  | Hello Sophia!  |
            | Charlie | Hello Charlie! |
            | Emily   | Hello Emily!   |
        Then I am redirected to the Hello Page and proper message appears