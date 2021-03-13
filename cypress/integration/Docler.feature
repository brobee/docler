Feature: Docler POC

As a Tester, in order to make sure the website works properly, I want to run all automation scripts.

    @REQ-UI-01
    Scenario: Mandatory elements check on Home page
        Given I am on the Homepage
        When I navigate to the Form page
        Then Title is "UI Testing Site"
        And I navigate to the Homepage
        Then Title is "UI Testing Site"
    
    @REQ-UI-02
    Scenario: Mandatory element check on Form page
        Given I am on the Homepage
        When I navigate to the Form page
        Then The Company Logo appears on the page
        And I navigate to the Homepage
        Then The Company Logo appears on the page
    
    @REQ-UI-03 @REQ-UI-04
    Scenario: Navigation check - Home page
        Given I am on the Form Page
        When I navigate to the Homepage
        Then Home page appears and Home turns to active status
    
    @REQ-UI-05 @REQ-UI-06
    Scenario: Navigation check - Form Page
        Given I am on the Homepage
        When I navigate to the Form page
        Then Form page appears and Form turns to active status
    
    @REQ-UI-07
    Scenario: Page response verification
        Given I am on the Homepage
        When I navigate to the Error Page
        Then I get "404" HTTP response code
    
    @REQ-UI¬08
    Scenario: Navigation check - Form Page
        Given I am on the Form Page
        When I click on the UI Testing logo
        Then I am navigated to the Home Page

    @REQ-UI-09 @REQ-UI-10
    Scenario: All mandatory elements should appear on the Homepage
        Given I am on the Homepage
        When the homepage has loaded
        Then All mandatory elements are visible on the Homepage
    
    @REQ-UI-11
    Scenario: All mandatory elements should appear on the Form Page
        Given I am on the Homepage
        When I navigate to the Form Page
        Then I can see All mandatory elements are visible on the Form page

    @REQ-UI-12
    Scenario: Multiple form submit with different values
        Given I am on the Form Page
        When I type in these values and submit the form
            | value   |     result     |
            | John    | Hello John!    |
            | Sophia  | Hello Sophia!  |
            | Charlie | Hello Charlie! |
            | Emily   | Hello Emily!   |
        Then I am redirected to the Hello Page and proper message appears